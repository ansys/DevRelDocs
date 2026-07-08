# Class sysc::CouplingInterface

![][C++]
![][public]

**Definition**: `CouplingInterface.hpp` (line 28)

Provide a class for a coupling interface.

Coupling interface can be used to set up the transfers of data between different regions within the same participant solver. Interface contains two sides and each side can contain one or more regions.





All regions on one side of the interface must have the same topology.

## Members

* [addDataTransfer](classsysc_1_1CouplingInterface.md#classsysc_1_1CouplingInterface_1ab1230f4b0c7dc52fff73d1ddcd67f03e)
* [addSideOneRegion](classsysc_1_1CouplingInterface.md#classsysc_1_1CouplingInterface_1ab7a385065f0fde034baa88a88f274946)
* [addSideTwoRegion](classsysc_1_1CouplingInterface.md#classsysc_1_1CouplingInterface_1a5afdb8ffa5c06d66fe30e6f150230b67)
* [CouplingInterface](classsysc_1_1CouplingInterface.md#classsysc_1_1CouplingInterface_1a606ddfa3113e3e0bf1ee7eee2b58793d)
* [getDataTransfer](classsysc_1_1CouplingInterface.md#classsysc_1_1CouplingInterface_1a712f091ef0bb543a6539c32fd6762fa8)
* [getName](classsysc_1_1CouplingInterface.md#classsysc_1_1CouplingInterface_1a16898e4f25dd40d0e8bc2efec9c4db1d)
* [getNumDataTransfers](classsysc_1_1CouplingInterface.md#classsysc_1_1CouplingInterface_1a9ac1bf66c466b9567e26fdf5c2108c05)
* [getNumSideOneRegions](classsysc_1_1CouplingInterface.md#classsysc_1_1CouplingInterface_1a84873c1535d70a88096d44242c97a1b7)
* [getNumSideTwoRegions](classsysc_1_1CouplingInterface.md#classsysc_1_1CouplingInterface_1a03a32678f212092a83149ea2b0c54f20)
* [getSideOneRegion](classsysc_1_1CouplingInterface.md#classsysc_1_1CouplingInterface_1a1191a096450bd4569325be7bef6cb1f6)
* [getSideTwoRegion](classsysc_1_1CouplingInterface.md#classsysc_1_1CouplingInterface_1a2809a5c10d6fc48e7c079fb09deaccd3)
* [m\_dataTransfers](classsysc_1_1CouplingInterface.md#classsysc_1_1CouplingInterface_1a72a7d21e64692ba517f920301d7bc6ff)
* [m\_name](classsysc_1_1CouplingInterface.md#classsysc_1_1CouplingInterface_1aafbe3ef2afb0e2f496d4bb7d90998063)
* [m\_sideOneRegions](classsysc_1_1CouplingInterface.md#classsysc_1_1CouplingInterface_1a0f56f6e8ae5eb0d6836e0fceef8db94e)
* [m\_sideOneRegionsNameToIndex](classsysc_1_1CouplingInterface.md#classsysc_1_1CouplingInterface_1a43da263e07f3f85854e35d1a25972087)
* [m\_sideTwoRegions](classsysc_1_1CouplingInterface.md#classsysc_1_1CouplingInterface_1af448ebfbacdc9ebf704c1823ad07ad36)
* [m\_sideTwoRegionsNameToIndex](classsysc_1_1CouplingInterface.md#classsysc_1_1CouplingInterface_1a53fce6f5fa4c32b40c28fe0053740327)

## Private attributes

<a id="classsysc_1_1CouplingInterface_1aafbe3ef2afb0e2f496d4bb7d90998063"></a>
### Variable m\_name

![][private]

**Definition**: `CouplingInterface.hpp` (line 101)

```cpp
CouplingInterfaceName sysc::CouplingInterface::m_name
```







**Type**: [CouplingInterfaceName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga8a62847c55d192b835faff927dbf41a3)

<a id="classsysc_1_1CouplingInterface_1a0f56f6e8ae5eb0d6836e0fceef8db94e"></a>
### Variable m\_sideOneRegions

![][private]

**Definition**: `CouplingInterface.hpp` (line 103)

```cpp
std::vector<Region> sysc::CouplingInterface::m_sideOneRegions
```







**Type**: std::vector< [Region](classsysc_1_1Region.md#classsysc_1_1Region) >

<a id="classsysc_1_1CouplingInterface_1a43da263e07f3f85854e35d1a25972087"></a>
### Variable m\_sideOneRegionsNameToIndex

![][private]

**Definition**: `CouplingInterface.hpp` (line 104)

```cpp
std::map<RegionName, std::size_t> sysc::CouplingInterface::m_sideOneRegionsNameToIndex
```







**Type**: std::map< [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d), std::size_t >

<a id="classsysc_1_1CouplingInterface_1af448ebfbacdc9ebf704c1823ad07ad36"></a>
### Variable m\_sideTwoRegions

![][private]

**Definition**: `CouplingInterface.hpp` (line 106)

```cpp
std::vector<Region> sysc::CouplingInterface::m_sideTwoRegions
```







**Type**: std::vector< [Region](classsysc_1_1Region.md#classsysc_1_1Region) >

<a id="classsysc_1_1CouplingInterface_1a53fce6f5fa4c32b40c28fe0053740327"></a>
### Variable m\_sideTwoRegionsNameToIndex

![][private]

**Definition**: `CouplingInterface.hpp` (line 107)

```cpp
std::map<RegionName, std::size_t> sysc::CouplingInterface::m_sideTwoRegionsNameToIndex
```







**Type**: std::map< [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d), std::size_t >

<a id="classsysc_1_1CouplingInterface_1a72a7d21e64692ba517f920301d7bc6ff"></a>
### Variable m\_dataTransfers

![][private]

**Definition**: `CouplingInterface.hpp` (line 109)

```cpp
std::vector<DataTransfer> sysc::CouplingInterface::m_dataTransfers
```







**Type**: std::vector< [DataTransfer](classsysc_1_1DataTransfer.md#classsysc_1_1DataTransfer) >

## Public functions

<a id="classsysc_1_1CouplingInterface_1a606ddfa3113e3e0bf1ee7eee2b58793d"></a>
### Function CouplingInterface

![][public]

```cpp
sysc::CouplingInterface::CouplingInterface(CouplingInterfaceName interfaceName)
```

Provide a constructor for the [CouplingInterface](classsysc_1_1CouplingInterface.md#classsysc_1_1CouplingInterface) class.

**Parameters**:

* **interfaceName**: A unique name for the coupling interface.



**Parameters**:

* [CouplingInterfaceName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga8a62847c55d192b835faff927dbf41a3) **interfaceName**

**Return type**: 

<a id="classsysc_1_1CouplingInterface_1ab7a385065f0fde034baa88a88f274946"></a>
### Function addSideOneRegion

![][public]

```cpp
void sysc::CouplingInterface::addSideOneRegion(const Region &region)
```

Add region to side one of the interface.

If this region has already been added to the interface on side one, then this call will have no effect.





If a different region with the same name has already been added to the interface on side one, then a runtime error will be thrown.





If a region with the same name has already been added to the interface on side two, then a runtime error will be thrown.





If the region name contains invalid characters, a runtime error will be thrown.






**Parameters**:

* **region**: [Region](classsysc_1_1Region.md#classsysc_1_1Region) to be added to side one of the interface.



**Parameters**:

* const [Region](classsysc_1_1Region.md#classsysc_1_1Region) & **region**

**Return type**: void

<a id="classsysc_1_1CouplingInterface_1a5afdb8ffa5c06d66fe30e6f150230b67"></a>
### Function addSideTwoRegion

![][public]

```cpp
void sysc::CouplingInterface::addSideTwoRegion(const Region &region)
```

Add region to side two of the interface.

If this region has already been added to the interface on side two, then this call will have no effect.





If a different region with the same name has already been added to the interface on side two, then a runtime error will be thrown.





If a region with the same name has already been added to the interface on side one, then a runtime error will be thrown.





If the region name contains invalid characters, a runtime error will be thrown.






**Parameters**:

* **region**: [Region](classsysc_1_1Region.md#classsysc_1_1Region) to be added to side one of the interface.



**Parameters**:

* const [Region](classsysc_1_1Region.md#classsysc_1_1Region) & **region**

**Return type**: void

<a id="classsysc_1_1CouplingInterface_1a16898e4f25dd40d0e8bc2efec9c4db1d"></a>
### Function getName

![][public]
![][const]

```cpp
const CouplingInterfaceName& sysc::CouplingInterface::getName() const
```

Get coupling interface name.





**Return type**: const [CouplingInterfaceName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga8a62847c55d192b835faff927dbf41a3) &

<a id="classsysc_1_1CouplingInterface_1a84873c1535d70a88096d44242c97a1b7"></a>
### Function getNumSideOneRegions

![][public]
![][const]

```cpp
std::size_t sysc::CouplingInterface::getNumSideOneRegions() const
```

Get the number of regions on side one of the interface.





**Return type**: std::size_t

<a id="classsysc_1_1CouplingInterface_1a03a32678f212092a83149ea2b0c54f20"></a>
### Function getNumSideTwoRegions

![][public]
![][const]

```cpp
std::size_t sysc::CouplingInterface::getNumSideTwoRegions() const
```

Get the number of regions on side two of the interface.





**Return type**: std::size_t

<a id="classsysc_1_1CouplingInterface_1a1191a096450bd4569325be7bef6cb1f6"></a>
### Function getSideOneRegion

![][public]
![][const]

```cpp
const Region& sysc::CouplingInterface::getSideOneRegion(std::size_t index) const
```

Get the region on side one, given an index.





**Parameters**:

* std::size_t **index**

**Return type**: const [Region](classsysc_1_1Region.md#classsysc_1_1Region) &

<a id="classsysc_1_1CouplingInterface_1a2809a5c10d6fc48e7c079fb09deaccd3"></a>
### Function getSideTwoRegion

![][public]
![][const]

```cpp
const Region& sysc::CouplingInterface::getSideTwoRegion(std::size_t index) const
```

Get the region on side two, given an index.





**Parameters**:

* std::size_t **index**

**Return type**: const [Region](classsysc_1_1Region.md#classsysc_1_1Region) &

<a id="classsysc_1_1CouplingInterface_1ab1230f4b0c7dc52fff73d1ddcd67f03e"></a>
### Function addDataTransfer

![][public]

```cpp
void sysc::CouplingInterface::addDataTransfer(const DataTransfer &dataTransfer)
```

Add a data transfer.





**Parameters**:

* const [DataTransfer](classsysc_1_1DataTransfer.md#classsysc_1_1DataTransfer) & **dataTransfer**

**Return type**: void

<a id="classsysc_1_1CouplingInterface_1a9ac1bf66c466b9567e26fdf5c2108c05"></a>
### Function getNumDataTransfers

![][public]
![][const]

```cpp
std::size_t sysc::CouplingInterface::getNumDataTransfers() const noexcept
```

Get the number of data transfers.





**Return type**: std::size_t

<a id="classsysc_1_1CouplingInterface_1a712f091ef0bb543a6539c32fd6762fa8"></a>
### Function getDataTransfer

![][public]
![][const]

```cpp
const DataTransfer& sysc::CouplingInterface::getDataTransfer(std::size_t index) const
```

Get the data transfer, given an index.





**Parameters**:

* std::size_t **index**

**Return type**: const [DataTransfer](classsysc_1_1DataTransfer.md#classsysc_1_1DataTransfer) &

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)