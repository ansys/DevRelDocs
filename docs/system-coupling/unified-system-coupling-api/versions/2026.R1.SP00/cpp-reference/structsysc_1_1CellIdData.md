# Structure sysc::CellIdData

![][C++]
![][public]

**Definition**: `MeshDefinition.hpp` (line 503)

Cell ids struct, provides read-only access to the mesh cell ids.



## Members

* [CellIdData](structsysc_1_1CellIdData.md#structsysc_1_1CellIdData_1a98ad7a1d764ec16ef61df2e5870902b8)
* [CellIdData](structsysc_1_1CellIdData.md#structsysc_1_1CellIdData_1a6c18d1340123ee685bee20d7ad0f3e0b)
* [CellIdData](structsysc_1_1CellIdData.md#structsysc_1_1CellIdData_1acf37bf9064761d43cc82356c02a8de37)
* [CellIdData](structsysc_1_1CellIdData.md#structsysc_1_1CellIdData_1a5aad89a32f3a50ac24062d3b8cd1eda3)
* [cellIds](structsysc_1_1CellIdData.md#structsysc_1_1CellIdData_1a442d969c7752bb028115709bf692afb3)
* [operator=](structsysc_1_1CellIdData.md#structsysc_1_1CellIdData_1a48fee2aa059da15ae9e2fda267260601)
* [operator=](structsysc_1_1CellIdData.md#structsysc_1_1CellIdData_1ae988af38b11a3a56824457d73f52dff1)

## Public attributes

<a id="structsysc_1_1CellIdData_1a442d969c7752bb028115709bf692afb3"></a>
### Variable cellIds

![][public]

**Definition**: `MeshDefinition.hpp` (line 505)


```cpp
OutputIntegerData sysc::CellIdData::cellIds
```


Cell ids.





**Type**: [OutputIntegerData](structsysc_1_1OutputIntegerData.md#structsysc_1_1OutputIntegerData)

**Referenced by**:

* [CellIdData](structsysc_1_1CellIdData.md#structsysc_1_1CellIdData_1a98ad7a1d764ec16ef61df2e5870902b8)

## Public functions

<a id="structsysc_1_1CellIdData_1a98ad7a1d764ec16ef61df2e5870902b8"></a>
### Function CellIdData

![][public]


```cpp
sysc::CellIdData::CellIdData(OutputIntegerData cellIds)
```


Constructor that takes cell ids.





**Parameters**:

* [OutputIntegerData](structsysc_1_1OutputIntegerData.md#structsysc_1_1OutputIntegerData) **cellIds**

**Return type**: 

**References**:

* [cellIds](structsysc_1_1CellIdData.md#structsysc_1_1CellIdData_1a442d969c7752bb028115709bf692afb3)

**Referenced by**:

* [CellIdData](structsysc_1_1CellIdData.md#structsysc_1_1CellIdData_1a5aad89a32f3a50ac24062d3b8cd1eda3)
* [CellIdData](structsysc_1_1CellIdData.md#structsysc_1_1CellIdData_1acf37bf9064761d43cc82356c02a8de37)
* [operator=](structsysc_1_1CellIdData.md#structsysc_1_1CellIdData_1ae988af38b11a3a56824457d73f52dff1)
* [operator=](structsysc_1_1CellIdData.md#structsysc_1_1CellIdData_1a48fee2aa059da15ae9e2fda267260601)

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

* const [CellIdData](structsysc_1_1CellIdData.md#structsysc_1_1CellIdData) &

**Return type**: 

**References**:

* [CellIdData](structsysc_1_1CellIdData.md#structsysc_1_1CellIdData_1a98ad7a1d764ec16ef61df2e5870902b8)

<a id="structsysc_1_1CellIdData_1a5aad89a32f3a50ac24062d3b8cd1eda3"></a>
### Function CellIdData

![][public]


```cpp
sysc::CellIdData::CellIdData(CellIdData &&)=default
```


Move constructor.





**Parameters**:

* [CellIdData](structsysc_1_1CellIdData.md#structsysc_1_1CellIdData) &&

**Return type**: 

**References**:

* [CellIdData](structsysc_1_1CellIdData.md#structsysc_1_1CellIdData_1a98ad7a1d764ec16ef61df2e5870902b8)

<a id="structsysc_1_1CellIdData_1a48fee2aa059da15ae9e2fda267260601"></a>
### Function operator=

![][public]


```cpp
CellIdData & sysc::CellIdData::operator=(const CellIdData &)=default
```


Copy-assign operator.





**Parameters**:

* const [CellIdData](structsysc_1_1CellIdData.md#structsysc_1_1CellIdData) &

**Return type**: [CellIdData](structsysc_1_1CellIdData.md#structsysc_1_1CellIdData) &

**References**:

* [CellIdData](structsysc_1_1CellIdData.md#structsysc_1_1CellIdData_1a98ad7a1d764ec16ef61df2e5870902b8)

<a id="structsysc_1_1CellIdData_1ae988af38b11a3a56824457d73f52dff1"></a>
### Function operator=

![][public]


```cpp
CellIdData & sysc::CellIdData::operator=(CellIdData &&)=default
```


Move-assign operator.





**Parameters**:

* [CellIdData](structsysc_1_1CellIdData.md#structsysc_1_1CellIdData) &&

**Return type**: [CellIdData](structsysc_1_1CellIdData.md#structsysc_1_1CellIdData) &

**References**:

* [CellIdData](structsysc_1_1CellIdData.md#structsysc_1_1CellIdData_1a98ad7a1d764ec16ef61df2e5870902b8)

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)