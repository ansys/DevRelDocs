# Structure sysc::ElementNodeCountData

![][C++]
![][public]

**Definition**: `MeshDefinition.hpp` (line 404)

Describes element node counts.



## Members

* [ElementNodeCountData](structsysc_1_1ElementNodeCountData.md#structsysc_1_1ElementNodeCountData_1af9d74cf7b176467cdc56e60417772c8a)
* [ElementNodeCountData](structsysc_1_1ElementNodeCountData.md#structsysc_1_1ElementNodeCountData_1a8878810b0df0cca773e6dd98e56dbb77)
* [ElementNodeCountData](structsysc_1_1ElementNodeCountData.md#structsysc_1_1ElementNodeCountData_1ae090e9435488439d9280babc73243c23)
* [ElementNodeCountData](structsysc_1_1ElementNodeCountData.md#structsysc_1_1ElementNodeCountData_1a790b1bd482fce93ad7569ca20f473acd)
* [ElementNodeCountData](structsysc_1_1ElementNodeCountData.md#structsysc_1_1ElementNodeCountData_1aa208c18aabf8e21b6914d598b79b4180)
* [elemNodeCounts](structsysc_1_1ElementNodeCountData.md#structsysc_1_1ElementNodeCountData_1a7464dda1219e853c893b4991c7382a85)
* [operator=](structsysc_1_1ElementNodeCountData.md#structsysc_1_1ElementNodeCountData_1abd3df6730b6abfcd74fa2e435b425cdc)
* [operator=](structsysc_1_1ElementNodeCountData.md#structsysc_1_1ElementNodeCountData_1aa0fee3e9f38ec309cbf12373864dbf59)

## Public attributes

<a id="structsysc_1_1ElementNodeCountData_1a7464dda1219e853c893b4991c7382a85"></a>
### Variable elemNodeCounts

![][public]

**Definition**: `MeshDefinition.hpp` (line 405)


```cpp
OutputIntegerData sysc::ElementNodeCountData::elemNodeCounts
```




Element node counts array.



**Type**: [OutputIntegerData](structsysc_1_1OutputIntegerData.md#structsysc_1_1OutputIntegerData)

**Referenced by**:

* [ElementNodeCountData](structsysc_1_1ElementNodeCountData.md#structsysc_1_1ElementNodeCountData_1af9d74cf7b176467cdc56e60417772c8a)
* [ElementNodeCountData](structsysc_1_1ElementNodeCountData.md#structsysc_1_1ElementNodeCountData_1a8878810b0df0cca773e6dd98e56dbb77)

## Public functions

<a id="structsysc_1_1ElementNodeCountData_1af9d74cf7b176467cdc56e60417772c8a"></a>
### Function ElementNodeCountData

![][public]


```cpp
sysc::ElementNodeCountData::ElementNodeCountData(InputElementNodeCountData inputData)
```


Constructor.





**Parameters**:

* [InputElementNodeCountData](structsysc_1_1InputElementNodeCountData.md#structsysc_1_1InputElementNodeCountData) **inputData**

**Return type**: 

**References**:

* [elemNodeCounts](structsysc_1_1ElementNodeCountData.md#structsysc_1_1ElementNodeCountData_1a7464dda1219e853c893b4991c7382a85)

**Referenced by**:

* [ElementNodeCountData](structsysc_1_1ElementNodeCountData.md#structsysc_1_1ElementNodeCountData_1a790b1bd482fce93ad7569ca20f473acd)
* [ElementNodeCountData](structsysc_1_1ElementNodeCountData.md#structsysc_1_1ElementNodeCountData_1aa208c18aabf8e21b6914d598b79b4180)
* [operator=](structsysc_1_1ElementNodeCountData.md#structsysc_1_1ElementNodeCountData_1abd3df6730b6abfcd74fa2e435b425cdc)
* [operator=](structsysc_1_1ElementNodeCountData.md#structsysc_1_1ElementNodeCountData_1aa0fee3e9f38ec309cbf12373864dbf59)

<a id="structsysc_1_1ElementNodeCountData_1a8878810b0df0cca773e6dd98e56dbb77"></a>
### Function ElementNodeCountData

![][public]


```cpp
sysc::ElementNodeCountData::ElementNodeCountData(OutputIntegerData elemNodeCounts)
```


Constructor that takes element node counts array.





**Parameters**:

* [OutputIntegerData](structsysc_1_1OutputIntegerData.md#structsysc_1_1OutputIntegerData) **elemNodeCounts**

**Return type**: 

**References**:

* [elemNodeCounts](structsysc_1_1ElementNodeCountData.md#structsysc_1_1ElementNodeCountData_1a7464dda1219e853c893b4991c7382a85)

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

* const [ElementNodeCountData](structsysc_1_1ElementNodeCountData.md#structsysc_1_1ElementNodeCountData) &

**Return type**: 

**References**:

* [ElementNodeCountData](structsysc_1_1ElementNodeCountData.md#structsysc_1_1ElementNodeCountData_1af9d74cf7b176467cdc56e60417772c8a)

<a id="structsysc_1_1ElementNodeCountData_1aa208c18aabf8e21b6914d598b79b4180"></a>
### Function ElementNodeCountData

![][public]


```cpp
sysc::ElementNodeCountData::ElementNodeCountData(ElementNodeCountData &&)=default
```


Move constructor.





**Parameters**:

* [ElementNodeCountData](structsysc_1_1ElementNodeCountData.md#structsysc_1_1ElementNodeCountData) &&

**Return type**: 

**References**:

* [ElementNodeCountData](structsysc_1_1ElementNodeCountData.md#structsysc_1_1ElementNodeCountData_1af9d74cf7b176467cdc56e60417772c8a)

<a id="structsysc_1_1ElementNodeCountData_1abd3df6730b6abfcd74fa2e435b425cdc"></a>
### Function operator=

![][public]


```cpp
ElementNodeCountData & sysc::ElementNodeCountData::operator=(const ElementNodeCountData &)=default
```


Copy-assign operator.





**Parameters**:

* const [ElementNodeCountData](structsysc_1_1ElementNodeCountData.md#structsysc_1_1ElementNodeCountData) &

**Return type**: [ElementNodeCountData](structsysc_1_1ElementNodeCountData.md#structsysc_1_1ElementNodeCountData) &

**References**:

* [ElementNodeCountData](structsysc_1_1ElementNodeCountData.md#structsysc_1_1ElementNodeCountData_1af9d74cf7b176467cdc56e60417772c8a)

<a id="structsysc_1_1ElementNodeCountData_1aa0fee3e9f38ec309cbf12373864dbf59"></a>
### Function operator=

![][public]


```cpp
ElementNodeCountData & sysc::ElementNodeCountData::operator=(ElementNodeCountData &&)=default
```


Move-assign operator.





**Parameters**:

* [ElementNodeCountData](structsysc_1_1ElementNodeCountData.md#structsysc_1_1ElementNodeCountData) &&

**Return type**: [ElementNodeCountData](structsysc_1_1ElementNodeCountData.md#structsysc_1_1ElementNodeCountData) &

**References**:

* [ElementNodeCountData](structsysc_1_1ElementNodeCountData.md#structsysc_1_1ElementNodeCountData_1af9d74cf7b176467cdc56e60417772c8a)

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)