# Structure sysc::InputCellData

![][C++]
![][public]

**Definition**: `MeshDefinition.hpp` (line 267)

Cell data access struct, provides read-and-write access to the mesh cells.



## Members

* [cellIds](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData_1a9abc04c55c29f5cb007ccc7daaf66a10)
* [cellNodeConnectivity](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData_1a1ba2e814258a8378511a0233f4aef037)
* [cellTypes](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData_1a2dcae8054e37cc526302a1c941e52dbe)
* [InputCellData](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData_1a87e4983e1d4d58d48c47929d08046918)
* [InputCellData](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData_1a08145e0e53603124286bb22e34167ce8)
* [InputCellData](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData_1a7d53a46422f35ccade5e915d826ede2f)
* [InputCellData](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData_1a46f8eaf36f00948491e486e28bf33c0f)
* [InputCellData](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData_1ad14c8c6ad429c88a46835fdfeadfae14)
* [InputCellData](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData_1a485f458d2c34e150f972a149a222daff)
* [operator=](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData_1ac4089c39a17dc126bb8cf22653f9fb7c)
* [operator=](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData_1ab9b18129d97b1393660d7c997646a24d)
* [size](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData_1afb6167b302da9e8dc79425822e428789)

## Public attributes

<a id="structsysc_1_1InputCellData_1a9abc04c55c29f5cb007ccc7daaf66a10"></a>
### Variable cellIds

![][public]

**Definition**: `MeshDefinition.hpp` (line 269)


```cpp
InputElementIdData sysc::InputCellData::cellIds
```


Cell ids.





**Type**: [InputElementIdData](structsysc_1_1InputElementIdData.md#structsysc_1_1InputElementIdData)

**Referenced by**:

* [InputCellData](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData_1a08145e0e53603124286bb22e34167ce8)
* [InputCellData](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData_1a87e4983e1d4d58d48c47929d08046918)
* [operator=](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData_1ab9b18129d97b1393660d7c997646a24d)

<a id="structsysc_1_1InputCellData_1a2dcae8054e37cc526302a1c941e52dbe"></a>
### Variable cellTypes

![][public]

**Definition**: `MeshDefinition.hpp` (line 272)


```cpp
InputElementTypeData sysc::InputCellData::cellTypes
```


Face ids.





**Type**: [InputElementTypeData](structsysc_1_1InputElementTypeData.md#structsysc_1_1InputElementTypeData)

**Referenced by**:

* [InputCellData](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData_1a87e4983e1d4d58d48c47929d08046918)
* [InputCellData](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData_1a7d53a46422f35ccade5e915d826ede2f)
* [operator=](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData_1ab9b18129d97b1393660d7c997646a24d)

<a id="structsysc_1_1InputCellData_1a1ba2e814258a8378511a0233f4aef037"></a>
### Variable cellNodeConnectivity

![][public]

**Definition**: `MeshDefinition.hpp` (line 275)


```cpp
InputElementNodeConnectivityData sysc::InputCellData::cellNodeConnectivity
```


Cell-to-node connectivity.





**Type**: [InputElementNodeConnectivityData](structsysc_1_1InputElementNodeConnectivityData.md#structsysc_1_1InputElementNodeConnectivityData)

**Referenced by**:

* [InputCellData](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData_1a87e4983e1d4d58d48c47929d08046918)
* [InputCellData](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData_1a7d53a46422f35ccade5e915d826ede2f)

## Public functions

<a id="structsysc_1_1InputCellData_1a87e4983e1d4d58d48c47929d08046918"></a>
### Function InputCellData

![][public]


```cpp
sysc::InputCellData::InputCellData(InputElementIdData cellIds, InputElementTypeData cellTypes, InputElementNodeConnectivityData cellNodeConnectivity)
```


Cell data constructor.





**Parameters**:

* [InputElementIdData](structsysc_1_1InputElementIdData.md#structsysc_1_1InputElementIdData) **cellIds**
* [InputElementTypeData](structsysc_1_1InputElementTypeData.md#structsysc_1_1InputElementTypeData) **cellTypes**
* [InputElementNodeConnectivityData](structsysc_1_1InputElementNodeConnectivityData.md#structsysc_1_1InputElementNodeConnectivityData) **cellNodeConnectivity**

**Return type**: 

**References**:

* [cellIds](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData_1a9abc04c55c29f5cb007ccc7daaf66a10)
* [cellNodeConnectivity](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData_1a1ba2e814258a8378511a0233f4aef037)
* [cellTypes](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData_1a2dcae8054e37cc526302a1c941e52dbe)

**Referenced by**:

* [InputCellData](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData_1ad14c8c6ad429c88a46835fdfeadfae14)
* [InputCellData](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData_1a485f458d2c34e150f972a149a222daff)
* [operator=](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData_1ac4089c39a17dc126bb8cf22653f9fb7c)
* [operator=](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData_1ab9b18129d97b1393660d7c997646a24d)

<a id="structsysc_1_1InputCellData_1a08145e0e53603124286bb22e34167ce8"></a>
### Function InputCellData

![][public]


```cpp
sysc::InputCellData::InputCellData(InputElementIdData cellIds)
```


Cell data constructor.





**Parameters**:

* [InputElementIdData](structsysc_1_1InputElementIdData.md#structsysc_1_1InputElementIdData) **cellIds**

**Return type**: 

**References**:

* [cellIds](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData_1a9abc04c55c29f5cb007ccc7daaf66a10)

<a id="structsysc_1_1InputCellData_1a7d53a46422f35ccade5e915d826ede2f"></a>
### Function InputCellData

![][public]


```cpp
sysc::InputCellData::InputCellData(InputElementTypeData cellTypes, InputElementNodeConnectivityData cellNodeConnectivity)
```


Cell data constructor.





**Parameters**:

* [InputElementTypeData](structsysc_1_1InputElementTypeData.md#structsysc_1_1InputElementTypeData) **cellTypes**
* [InputElementNodeConnectivityData](structsysc_1_1InputElementNodeConnectivityData.md#structsysc_1_1InputElementNodeConnectivityData) **cellNodeConnectivity**

**Return type**: 

**References**:

* [cellNodeConnectivity](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData_1a1ba2e814258a8378511a0233f4aef037)
* [cellTypes](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData_1a2dcae8054e37cc526302a1c941e52dbe)

<a id="structsysc_1_1InputCellData_1a46f8eaf36f00948491e486e28bf33c0f"></a>
### Function InputCellData

![][public]


```cpp
sysc::InputCellData::InputCellData()=default
```


Default constructor.





**Return type**: 

<a id="structsysc_1_1InputCellData_1ad14c8c6ad429c88a46835fdfeadfae14"></a>
### Function InputCellData

![][public]


```cpp
sysc::InputCellData::InputCellData(const InputCellData &)=default
```


Copy constructor.





**Parameters**:

* const [InputCellData](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData) &

**Return type**: 

**References**:

* [InputCellData](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData_1a87e4983e1d4d58d48c47929d08046918)

<a id="structsysc_1_1InputCellData_1a485f458d2c34e150f972a149a222daff"></a>
### Function InputCellData

![][public]


```cpp
sysc::InputCellData::InputCellData(InputCellData &&)=default
```


Move constructor.





**Parameters**:

* [InputCellData](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData) &&

**Return type**: 

**References**:

* [InputCellData](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData_1a87e4983e1d4d58d48c47929d08046918)

<a id="structsysc_1_1InputCellData_1ac4089c39a17dc126bb8cf22653f9fb7c"></a>
### Function operator=

![][public]


```cpp
InputCellData & sysc::InputCellData::operator=(const InputCellData &)=default
```


Copy-assign operator.





**Parameters**:

* const [InputCellData](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData) &

**Return type**: [InputCellData](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData) &

**References**:

* [InputCellData](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData_1a87e4983e1d4d58d48c47929d08046918)

<a id="structsysc_1_1InputCellData_1ab9b18129d97b1393660d7c997646a24d"></a>
### Function operator=

![][public]


```cpp
InputCellData & sysc::InputCellData::operator=(InputCellData &&)=default
```


Move-assign operator.





**Parameters**:

* [InputCellData](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData) &&

**Return type**: [InputCellData](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData) &

**References**:

* [cellIds](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData_1a9abc04c55c29f5cb007ccc7daaf66a10)
* [cellTypes](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData_1a2dcae8054e37cc526302a1c941e52dbe)
* [InputCellData](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData_1a87e4983e1d4d58d48c47929d08046918)

<a id="structsysc_1_1InputCellData_1afb6167b302da9e8dc79425822e428789"></a>
### Function size

![][public]
![][const]


```cpp
std::size_t sysc::InputCellData::size() const
```








**Return type**: std::size_t

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)