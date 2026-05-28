---
title: "Structure sysc::CellIdData"
---

![][C++]
![][public]

**Definition**: `MeshDefinition.hpp` (line 164)

Cell ids struct, provides read-only access to the mesh cell ids.



## Members

* [CellIdData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1CellIdData)
* [CellIdData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1CellIdData)
* [CellIdData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1CellIdData)
* [CellIdData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1CellIdData)
* [cellIds](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1CellIdData)
* [operator=](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1CellIdData)
* [operator=](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1CellIdData)

## Public attributes

<a id="structsysc_1_1CellIdData_1a442d969c7752bb028115709bf692afb3"></a>
### Variable cellIds

![][public]

**Definition**: `MeshDefinition.hpp` (line 166)

```cpp
OutputIntegerData sysc::CellIdData::cellIds
```

Cell ids.





**Type**: [OutputIntegerData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1OutputIntegerData)

## Public functions

<a id="structsysc_1_1CellIdData_1a98ad7a1d764ec16ef61df2e5870902b8"></a>
### Function CellIdData

![][public]

```cpp
sysc::CellIdData::CellIdData(OutputIntegerData cellIds)
```

Constructor that takes cell ids.





**Parameters**:

* [OutputIntegerData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1OutputIntegerData) **cellIds**

**Return type**: 

<a id="structsysc_1_1CellIdData_1a6c18d1340123ee685bee20d7ad0f3e0b"></a>
### Function CellIdData

![][public]

```cpp
sysc::CellIdData::CellIdData()=default
```

Default constructor.





**Return type**: 

<a id="structsysc_1_1CellIdData_1acf37bf9064761d43cc82356c02a8de37"></a>
### Function CellIdData

![][public]

```cpp
sysc::CellIdData::CellIdData(const CellIdData &)=default
```

Copy constructor.





**Parameters**:

* const [CellIdData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1CellIdData) &

**Return type**: 

<a id="structsysc_1_1CellIdData_1a5aad89a32f3a50ac24062d3b8cd1eda3"></a>
### Function CellIdData

![][public]

```cpp
sysc::CellIdData::CellIdData(CellIdData &&)=default
```

Move constructor.





**Parameters**:

* [CellIdData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1CellIdData) &&

**Return type**: 

<a id="structsysc_1_1CellIdData_1ad2abd7e7dd934b84308b1f52832fb5d7"></a>
### Function operator=

![][public]

```cpp
CellIdData& sysc::CellIdData::operator=(const CellIdData &)=default
```

Copy-assign operator.





**Parameters**:

* const [CellIdData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1CellIdData) &

**Return type**: [CellIdData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1CellIdData) &

<a id="structsysc_1_1CellIdData_1a8f85908868226d8fbfa19972b10bb61f"></a>
### Function operator=

![][public]

```cpp
CellIdData& sysc::CellIdData::operator=(CellIdData &&)=default
```

Move-assign operator.





**Parameters**:

* [CellIdData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1CellIdData) &&

**Return type**: [CellIdData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1CellIdData) &

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)