---
title: "Structure sysc::FaceCellConnectivityData"
---

![][C++]
![][public]

**Definition**: `MeshDefinition.hpp` (line 136)

Describes face-to-cell connectivity.



## Members

* [cell0Ids](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1FaceCellConnectivityData)
* [cell1Ids](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1FaceCellConnectivityData)
* [FaceCellConnectivityData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1FaceCellConnectivityData)
* [FaceCellConnectivityData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1FaceCellConnectivityData)
* [FaceCellConnectivityData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1FaceCellConnectivityData)
* [FaceCellConnectivityData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1FaceCellConnectivityData)
* [operator=](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1FaceCellConnectivityData)
* [operator=](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1FaceCellConnectivityData)

## Public attributes

<a id="structsysc_1_1FaceCellConnectivityData_1aa0ca1cf99c9e1101d81d50654f52889e"></a>
### Variable cell0Ids

![][public]

**Definition**: `MeshDefinition.hpp` (line 137)

```cpp
OutputIntegerData sysc::FaceCellConnectivityData::cell0Ids
```



Cell ids on side 0.



**Type**: [OutputIntegerData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1OutputIntegerData)

<a id="structsysc_1_1FaceCellConnectivityData_1a198df63a8595512c5f50eef276043cc3"></a>
### Variable cell1Ids

![][public]

**Definition**: `MeshDefinition.hpp` (line 138)

```cpp
OutputIntegerData sysc::FaceCellConnectivityData::cell1Ids
```



Cell ids on side 1.



**Type**: [OutputIntegerData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1OutputIntegerData)

## Public functions

<a id="structsysc_1_1FaceCellConnectivityData_1aa2566e5d0aa59b3fb0d79968001b371d"></a>
### Function FaceCellConnectivityData

![][public]

```cpp
sysc::FaceCellConnectivityData::FaceCellConnectivityData(OutputIntegerData cell0Ids, OutputIntegerData cell1Ids)
```

Create face-to-cell connectivity given cell0 and cell1 arrays.





**Parameters**:

* [OutputIntegerData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1OutputIntegerData) **cell0Ids**
* [OutputIntegerData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1OutputIntegerData) **cell1Ids**

**Return type**: 

<a id="structsysc_1_1FaceCellConnectivityData_1a2628d79a19f551ba099deace8d6c0625"></a>
### Function FaceCellConnectivityData

![][public]

```cpp
sysc::FaceCellConnectivityData::FaceCellConnectivityData()=default
```

Create empty face-to-cell connectivity.





**Return type**: 

<a id="structsysc_1_1FaceCellConnectivityData_1a98c490d601606aab41011dc8a1d67577"></a>
### Function FaceCellConnectivityData

![][public]

```cpp
sysc::FaceCellConnectivityData::FaceCellConnectivityData(const FaceCellConnectivityData &)=default
```

Copy constructor.





**Parameters**:

* const [FaceCellConnectivityData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1FaceCellConnectivityData) &

**Return type**: 

<a id="structsysc_1_1FaceCellConnectivityData_1ae53635823a4f5d5d2703bc1e5c4c3ecb"></a>
### Function FaceCellConnectivityData

![][public]

```cpp
sysc::FaceCellConnectivityData::FaceCellConnectivityData(FaceCellConnectivityData &&)=default
```

Move constructor.





**Parameters**:

* [FaceCellConnectivityData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1FaceCellConnectivityData) &&

**Return type**: 

<a id="structsysc_1_1FaceCellConnectivityData_1a599b24d3e54645b1d0b7ef3e51e14289"></a>
### Function operator=

![][public]

```cpp
FaceCellConnectivityData& sysc::FaceCellConnectivityData::operator=(const FaceCellConnectivityData &)=default
```

Copy-assign operator.





**Parameters**:

* const [FaceCellConnectivityData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1FaceCellConnectivityData) &

**Return type**: [FaceCellConnectivityData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1FaceCellConnectivityData) &

<a id="structsysc_1_1FaceCellConnectivityData_1aeb458c27515e6b4089dcc2790cef6075"></a>
### Function operator=

![][public]

```cpp
FaceCellConnectivityData& sysc::FaceCellConnectivityData::operator=(FaceCellConnectivityData &&)=default
```

Move-assign operator.





**Parameters**:

* [FaceCellConnectivityData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1FaceCellConnectivityData) &&

**Return type**: [FaceCellConnectivityData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1FaceCellConnectivityData) &

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)