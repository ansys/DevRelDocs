# Structure sysc::FaceCellConnectivityData

![][C++]
![][public]

**Definition**: `MeshDefinition.hpp` (line 469)

Describes face-to-cell connectivity.



## Members

* [cell0Ids](structsysc_1_1FaceCellConnectivityData.md#structsysc_1_1FaceCellConnectivityData_1aa0ca1cf99c9e1101d81d50654f52889e)
* [cell1Ids](structsysc_1_1FaceCellConnectivityData.md#structsysc_1_1FaceCellConnectivityData_1a198df63a8595512c5f50eef276043cc3)
* [FaceCellConnectivityData](structsysc_1_1FaceCellConnectivityData.md#structsysc_1_1FaceCellConnectivityData_1a715312d6284e6c9a2689c672d0d436cc)
* [FaceCellConnectivityData](structsysc_1_1FaceCellConnectivityData.md#structsysc_1_1FaceCellConnectivityData_1aa2566e5d0aa59b3fb0d79968001b371d)
* [FaceCellConnectivityData](structsysc_1_1FaceCellConnectivityData.md#structsysc_1_1FaceCellConnectivityData_1a2628d79a19f551ba099deace8d6c0625)
* [FaceCellConnectivityData](structsysc_1_1FaceCellConnectivityData.md#structsysc_1_1FaceCellConnectivityData_1a98c490d601606aab41011dc8a1d67577)
* [FaceCellConnectivityData](structsysc_1_1FaceCellConnectivityData.md#structsysc_1_1FaceCellConnectivityData_1ae53635823a4f5d5d2703bc1e5c4c3ecb)
* [operator=](structsysc_1_1FaceCellConnectivityData.md#structsysc_1_1FaceCellConnectivityData_1ae4cd9c83035945eed0e360adfe08235e)
* [operator=](structsysc_1_1FaceCellConnectivityData.md#structsysc_1_1FaceCellConnectivityData_1ae796325a0b7d80621784e3033d1eac21)

## Public attributes

<a id="structsysc_1_1FaceCellConnectivityData_1aa0ca1cf99c9e1101d81d50654f52889e"></a>
### Variable cell0Ids

![][public]

**Definition**: `MeshDefinition.hpp` (line 470)


```cpp
OutputIntegerData sysc::FaceCellConnectivityData::cell0Ids
```




Cell ids on side 0.



**Type**: [OutputIntegerData](structsysc_1_1OutputIntegerData.md#structsysc_1_1OutputIntegerData)

**Referenced by**:

* [FaceCellConnectivityData](structsysc_1_1FaceCellConnectivityData.md#structsysc_1_1FaceCellConnectivityData_1aa2566e5d0aa59b3fb0d79968001b371d)

<a id="structsysc_1_1FaceCellConnectivityData_1a198df63a8595512c5f50eef276043cc3"></a>
### Variable cell1Ids

![][public]

**Definition**: `MeshDefinition.hpp` (line 471)


```cpp
OutputIntegerData sysc::FaceCellConnectivityData::cell1Ids
```




Cell ids on side 1.



**Type**: [OutputIntegerData](structsysc_1_1OutputIntegerData.md#structsysc_1_1OutputIntegerData)

**Referenced by**:

* [FaceCellConnectivityData](structsysc_1_1FaceCellConnectivityData.md#structsysc_1_1FaceCellConnectivityData_1aa2566e5d0aa59b3fb0d79968001b371d)

## Public functions

<a id="structsysc_1_1FaceCellConnectivityData_1a715312d6284e6c9a2689c672d0d436cc"></a>
### Function FaceCellConnectivityData

![][public]


```cpp
sysc::FaceCellConnectivityData::FaceCellConnectivityData(InputFaceCellConnectivityData inputData)
```








**Parameters**:

* [InputFaceCellConnectivityData](structsysc_1_1InputFaceCellConnectivityData.md#structsysc_1_1InputFaceCellConnectivityData) **inputData**

**Return type**: 

<a id="structsysc_1_1FaceCellConnectivityData_1aa2566e5d0aa59b3fb0d79968001b371d"></a>
### Function FaceCellConnectivityData

![][public]


```cpp
sysc::FaceCellConnectivityData::FaceCellConnectivityData(OutputIntegerData cell0Ids, OutputIntegerData cell1Ids)
```


Create face-to-cell connectivity given cell0 and cell1 arrays.





**Parameters**:

* [OutputIntegerData](structsysc_1_1OutputIntegerData.md#structsysc_1_1OutputIntegerData) **cell0Ids**
* [OutputIntegerData](structsysc_1_1OutputIntegerData.md#structsysc_1_1OutputIntegerData) **cell1Ids**

**Return type**: 

**References**:

* [cell0Ids](structsysc_1_1FaceCellConnectivityData.md#structsysc_1_1FaceCellConnectivityData_1aa0ca1cf99c9e1101d81d50654f52889e)
* [cell1Ids](structsysc_1_1FaceCellConnectivityData.md#structsysc_1_1FaceCellConnectivityData_1a198df63a8595512c5f50eef276043cc3)

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

* const [FaceCellConnectivityData](structsysc_1_1FaceCellConnectivityData.md#structsysc_1_1FaceCellConnectivityData) &

**Return type**: 

<a id="structsysc_1_1FaceCellConnectivityData_1ae53635823a4f5d5d2703bc1e5c4c3ecb"></a>
### Function FaceCellConnectivityData

![][public]


```cpp
sysc::FaceCellConnectivityData::FaceCellConnectivityData(FaceCellConnectivityData &&)=default
```


Move constructor.





**Parameters**:

* [FaceCellConnectivityData](structsysc_1_1FaceCellConnectivityData.md#structsysc_1_1FaceCellConnectivityData) &&

**Return type**: 

<a id="structsysc_1_1FaceCellConnectivityData_1ae4cd9c83035945eed0e360adfe08235e"></a>
### Function operator=

![][public]


```cpp
FaceCellConnectivityData & sysc::FaceCellConnectivityData::operator=(const FaceCellConnectivityData &)=default
```


Copy-assign operator.





**Parameters**:

* const [FaceCellConnectivityData](structsysc_1_1FaceCellConnectivityData.md#structsysc_1_1FaceCellConnectivityData) &

**Return type**: [FaceCellConnectivityData](structsysc_1_1FaceCellConnectivityData.md#structsysc_1_1FaceCellConnectivityData) &

<a id="structsysc_1_1FaceCellConnectivityData_1ae796325a0b7d80621784e3033d1eac21"></a>
### Function operator=

![][public]


```cpp
FaceCellConnectivityData & sysc::FaceCellConnectivityData::operator=(FaceCellConnectivityData &&)=default
```


Move-assign operator.





**Parameters**:

* [FaceCellConnectivityData](structsysc_1_1FaceCellConnectivityData.md#structsysc_1_1FaceCellConnectivityData) &&

**Return type**: [FaceCellConnectivityData](structsysc_1_1FaceCellConnectivityData.md#structsysc_1_1FaceCellConnectivityData) &

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)