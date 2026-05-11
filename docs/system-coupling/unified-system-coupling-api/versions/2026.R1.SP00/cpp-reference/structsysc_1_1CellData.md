# Structure sysc::CellData

![][C++]
![][public]

**Definition**: `MeshDefinition.hpp` (line 369)

Cell data access struct, provides read-only access to the mesh cells.



## Members

* [CellData](structsysc_1_1CellData.md#structsysc_1_1CellData_1a92b78b14f0147d6176e35a87d3836600)
* [CellData](structsysc_1_1CellData.md#structsysc_1_1CellData_1ae620829629d1f36255d95213e4637a25)
* [CellData](structsysc_1_1CellData.md#structsysc_1_1CellData_1a71a24078547f71fa4114df3e7f423db4)
* [CellData](structsysc_1_1CellData.md#structsysc_1_1CellData_1a7cb85447c31134ae8c15c11f19ed0735)
* [CellData](structsysc_1_1CellData.md#structsysc_1_1CellData_1a62d2f2a68634bf430cdf4d8294ecfbde)
* [CellData](structsysc_1_1CellData.md#structsysc_1_1CellData_1a02847ee3c0eecbc4649577ad108fc671)
* [cellIds](structsysc_1_1CellData.md#structsysc_1_1CellData_1a9e6712d1905400a6c9f08b4acd8a9551)
* [cellNodeConnectivity](structsysc_1_1CellData.md#structsysc_1_1CellData_1a136335289879bf97aa1bb3cc5076ece7)
* [cellTypes](structsysc_1_1CellData.md#structsysc_1_1CellData_1ac6f3b7e05380a1a02c25ed7cd3bac3dd)
* [operator=](structsysc_1_1CellData.md#structsysc_1_1CellData_1a9ddae34c80c5fe86ea28432266f90ebf)
* [operator=](structsysc_1_1CellData.md#structsysc_1_1CellData_1acc8f43d644f86c19404dae7b6443f01f)

## Public attributes

<a id="structsysc_1_1CellData_1a9e6712d1905400a6c9f08b4acd8a9551"></a>
### Variable cellIds

![][public]

**Definition**: `MeshDefinition.hpp` (line 371)

```cpp
ElementIdData sysc::CellData::cellIds
```

Cell ids.





**Type**: [ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData)

<a id="structsysc_1_1CellData_1ac6f3b7e05380a1a02c25ed7cd3bac3dd"></a>
### Variable cellTypes

![][public]

**Definition**: `MeshDefinition.hpp` (line 374)

```cpp
ElementTypeData sysc::CellData::cellTypes
```

Face ids.





**Type**: [ElementTypeData](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData)

<a id="structsysc_1_1CellData_1a136335289879bf97aa1bb3cc5076ece7"></a>
### Variable cellNodeConnectivity

![][public]

**Definition**: `MeshDefinition.hpp` (line 377)

```cpp
ElementNodeConnectivityData sysc::CellData::cellNodeConnectivity
```

Cell-to-node connectivity.





**Type**: [ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData)

## Public functions

<a id="structsysc_1_1CellData_1a92b78b14f0147d6176e35a87d3836600"></a>
### Function CellData

![][public]

```cpp
sysc::CellData::CellData(ElementIdData cellIds, ElementTypeData cellTypes, ElementNodeConnectivityData cellNodeConnectivity)
```

Cell data constructor.





**Parameters**:

* [ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData) **cellIds**
* [ElementTypeData](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData) **cellTypes**
* [ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData) **cellNodeConnectivity**

**Return type**: 

<a id="structsysc_1_1CellData_1ae620829629d1f36255d95213e4637a25"></a>
### Function CellData

![][public]

```cpp
sysc::CellData::CellData(ElementIdData cellIds)
```

Cell data constructor.





**Parameters**:

* [ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData) **cellIds**

**Return type**: 

<a id="structsysc_1_1CellData_1a71a24078547f71fa4114df3e7f423db4"></a>
### Function CellData

![][public]

```cpp
sysc::CellData::CellData(ElementTypeData cellTypes, ElementNodeConnectivityData cellNodeConnectivity)
```

Cell data constructor.





**Parameters**:

* [ElementTypeData](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData) **cellTypes**
* [ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData) **cellNodeConnectivity**

**Return type**: 

<a id="structsysc_1_1CellData_1a7cb85447c31134ae8c15c11f19ed0735"></a>
### Function CellData

![][public]

```cpp
sysc::CellData::CellData()=default
```

Default constructor.





**Return type**: 

<a id="structsysc_1_1CellData_1a62d2f2a68634bf430cdf4d8294ecfbde"></a>
### Function CellData

![][public]

```cpp
sysc::CellData::CellData(const CellData &)=default
```

Copy constructor.





**Parameters**:

* const [CellData](structsysc_1_1CellData.md#structsysc_1_1CellData) &

**Return type**: 

<a id="structsysc_1_1CellData_1a02847ee3c0eecbc4649577ad108fc671"></a>
### Function CellData

![][public]

```cpp
sysc::CellData::CellData(CellData &&)=default
```

Move constructor.





**Parameters**:

* [CellData](structsysc_1_1CellData.md#structsysc_1_1CellData) &&

**Return type**: 

<a id="structsysc_1_1CellData_1a9ddae34c80c5fe86ea28432266f90ebf"></a>
### Function operator=

![][public]

```cpp
CellData& sysc::CellData::operator=(const CellData &)=default
```

Copy-assign operator.





**Parameters**:

* const [CellData](structsysc_1_1CellData.md#structsysc_1_1CellData) &

**Return type**: [CellData](structsysc_1_1CellData.md#structsysc_1_1CellData) &

<a id="structsysc_1_1CellData_1acc8f43d644f86c19404dae7b6443f01f"></a>
### Function operator=

![][public]

```cpp
CellData& sysc::CellData::operator=(CellData &&)=default
```

Move-assign operator.





**Parameters**:

* [CellData](structsysc_1_1CellData.md#structsysc_1_1CellData) &&

**Return type**: [CellData](structsysc_1_1CellData.md#structsysc_1_1CellData) &

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)