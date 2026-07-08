# Structure sysc::InputElementNodeConnectivityData

![][C++]
![][public]

**Definition**: `MeshDefinition.hpp` (line 111)

Describes element-to-node connectivity.



## Members

* [elemNodeIds](structsysc_1_1InputElementNodeConnectivityData.md#structsysc_1_1InputElementNodeConnectivityData_1a99b1032e6c59d7d701fd17492fe62149)
* [InputElementNodeConnectivityData](structsysc_1_1InputElementNodeConnectivityData.md#structsysc_1_1InputElementNodeConnectivityData_1a970175300e44190982735fcaed39249d)
* [InputElementNodeConnectivityData](structsysc_1_1InputElementNodeConnectivityData.md#structsysc_1_1InputElementNodeConnectivityData_1af3b7b2b76faad3178487de6adcfdad6b)
* [InputElementNodeConnectivityData](structsysc_1_1InputElementNodeConnectivityData.md#structsysc_1_1InputElementNodeConnectivityData_1a2fe820a74f28a65703c4bff962ffba3d)
* [InputElementNodeConnectivityData](structsysc_1_1InputElementNodeConnectivityData.md#structsysc_1_1InputElementNodeConnectivityData_1a798e11b9d3d8232e173150be148c30ac)
* [operator=](structsysc_1_1InputElementNodeConnectivityData.md#structsysc_1_1InputElementNodeConnectivityData_1accb13a08018b05c032f94533f4d901c0)
* [operator=](structsysc_1_1InputElementNodeConnectivityData.md#structsysc_1_1InputElementNodeConnectivityData_1a37d63ee966f6389d66285179c12aaeb1)

## Public attributes

<a id="structsysc_1_1InputElementNodeConnectivityData_1a99b1032e6c59d7d701fd17492fe62149"></a>
### Variable elemNodeIds

![][public]

**Definition**: `MeshDefinition.hpp` (line 112)


```cpp
IntegerData sysc::InputElementNodeConnectivityData::elemNodeIds
```




Element-to-node connectivity array.



**Type**: [IntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData)

**Referenced by**:

* [InputElementNodeConnectivityData](structsysc_1_1InputElementNodeConnectivityData.md#structsysc_1_1InputElementNodeConnectivityData_1a970175300e44190982735fcaed39249d)

## Public functions

<a id="structsysc_1_1InputElementNodeConnectivityData_1a970175300e44190982735fcaed39249d"></a>
### Function InputElementNodeConnectivityData

![][public]


```cpp
sysc::InputElementNodeConnectivityData::InputElementNodeConnectivityData(IntegerData elemNodeIds)
```


Constructor that takes element-to-node connectivity array.





**Parameters**:

* [IntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData) **elemNodeIds**

**Return type**: 

**References**:

* [elemNodeIds](structsysc_1_1InputElementNodeConnectivityData.md#structsysc_1_1InputElementNodeConnectivityData_1a99b1032e6c59d7d701fd17492fe62149)

**Referenced by**:

* [InputElementNodeConnectivityData](structsysc_1_1InputElementNodeConnectivityData.md#structsysc_1_1InputElementNodeConnectivityData_1a2fe820a74f28a65703c4bff962ffba3d)
* [InputElementNodeConnectivityData](structsysc_1_1InputElementNodeConnectivityData.md#structsysc_1_1InputElementNodeConnectivityData_1a798e11b9d3d8232e173150be148c30ac)
* [operator=](structsysc_1_1InputElementNodeConnectivityData.md#structsysc_1_1InputElementNodeConnectivityData_1accb13a08018b05c032f94533f4d901c0)
* [operator=](structsysc_1_1InputElementNodeConnectivityData.md#structsysc_1_1InputElementNodeConnectivityData_1a37d63ee966f6389d66285179c12aaeb1)

<a id="structsysc_1_1InputElementNodeConnectivityData_1af3b7b2b76faad3178487de6adcfdad6b"></a>
### Function InputElementNodeConnectivityData

![][public]


```cpp
sysc::InputElementNodeConnectivityData::InputElementNodeConnectivityData()=default
```


Default constructor.





**Return type**: 

<a id="structsysc_1_1InputElementNodeConnectivityData_1a2fe820a74f28a65703c4bff962ffba3d"></a>
### Function InputElementNodeConnectivityData

![][public]


```cpp
sysc::InputElementNodeConnectivityData::InputElementNodeConnectivityData(const InputElementNodeConnectivityData &)=default
```


Copy constructor.





**Parameters**:

* const [InputElementNodeConnectivityData](structsysc_1_1InputElementNodeConnectivityData.md#structsysc_1_1InputElementNodeConnectivityData) &

**Return type**: 

**References**:

* [InputElementNodeConnectivityData](structsysc_1_1InputElementNodeConnectivityData.md#structsysc_1_1InputElementNodeConnectivityData_1a970175300e44190982735fcaed39249d)

<a id="structsysc_1_1InputElementNodeConnectivityData_1a798e11b9d3d8232e173150be148c30ac"></a>
### Function InputElementNodeConnectivityData

![][public]


```cpp
sysc::InputElementNodeConnectivityData::InputElementNodeConnectivityData(InputElementNodeConnectivityData &&)=default
```


Move constructor.





**Parameters**:

* [InputElementNodeConnectivityData](structsysc_1_1InputElementNodeConnectivityData.md#structsysc_1_1InputElementNodeConnectivityData) &&

**Return type**: 

**References**:

* [InputElementNodeConnectivityData](structsysc_1_1InputElementNodeConnectivityData.md#structsysc_1_1InputElementNodeConnectivityData_1a970175300e44190982735fcaed39249d)

<a id="structsysc_1_1InputElementNodeConnectivityData_1accb13a08018b05c032f94533f4d901c0"></a>
### Function operator=

![][public]


```cpp
InputElementNodeConnectivityData & sysc::InputElementNodeConnectivityData::operator=(const InputElementNodeConnectivityData &)=default
```


Copy-assign operator.





**Parameters**:

* const [InputElementNodeConnectivityData](structsysc_1_1InputElementNodeConnectivityData.md#structsysc_1_1InputElementNodeConnectivityData) &

**Return type**: [InputElementNodeConnectivityData](structsysc_1_1InputElementNodeConnectivityData.md#structsysc_1_1InputElementNodeConnectivityData) &

**References**:

* [InputElementNodeConnectivityData](structsysc_1_1InputElementNodeConnectivityData.md#structsysc_1_1InputElementNodeConnectivityData_1a970175300e44190982735fcaed39249d)

<a id="structsysc_1_1InputElementNodeConnectivityData_1a37d63ee966f6389d66285179c12aaeb1"></a>
### Function operator=

![][public]


```cpp
InputElementNodeConnectivityData & sysc::InputElementNodeConnectivityData::operator=(InputElementNodeConnectivityData &&)=default
```


Move-assign operator.





**Parameters**:

* [InputElementNodeConnectivityData](structsysc_1_1InputElementNodeConnectivityData.md#structsysc_1_1InputElementNodeConnectivityData) &&

**Return type**: [InputElementNodeConnectivityData](structsysc_1_1InputElementNodeConnectivityData.md#structsysc_1_1InputElementNodeConnectivityData) &

**References**:

* [InputElementNodeConnectivityData](structsysc_1_1InputElementNodeConnectivityData.md#structsysc_1_1InputElementNodeConnectivityData_1a970175300e44190982735fcaed39249d)

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)