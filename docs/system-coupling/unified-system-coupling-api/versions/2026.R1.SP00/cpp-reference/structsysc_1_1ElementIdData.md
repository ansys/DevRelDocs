# Structure sysc::ElementIdData

![][C++]
![][public]

**Definition**: `MeshDefinition.hpp` (line 333)

Element id access struct, provides read-only access to the mesh element ids.



## Members

* [ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData_1a89beffa7a332b682987c50e09eb2c04b)
* [ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData_1a2bc3e191dedac4234791ebe8d2726efc)
* [ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData_1ad58ae6d869976ba9e7a110d49b6a47a2)
* [ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData_1a39cc1f753def252933c52a6b73b72785)
* [ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData_1a2d4efcc91449a330e8ce7e5ad14ca309)
* [elementIds](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData_1ac98082ccca6778003a7785e4033fdcf7)
* [operator=](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData_1af4e14a9b2ab00bde4eb45d7996718dfe)
* [operator=](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData_1a8069f94a877116f8c9d25f570898bdd7)

## Public attributes

<a id="structsysc_1_1ElementIdData_1ac98082ccca6778003a7785e4033fdcf7"></a>
### Variable elementIds

![][public]

**Definition**: `MeshDefinition.hpp` (line 335)


```cpp
OutputIntegerData sysc::ElementIdData::elementIds
```


Element ids.





**Type**: [OutputIntegerData](structsysc_1_1OutputIntegerData.md#structsysc_1_1OutputIntegerData)

**Referenced by**:

* [ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData_1a89beffa7a332b682987c50e09eb2c04b)
* [ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData_1a2bc3e191dedac4234791ebe8d2726efc)

## Public functions

<a id="structsysc_1_1ElementIdData_1a89beffa7a332b682987c50e09eb2c04b"></a>
### Function ElementIdData

![][public]


```cpp
sysc::ElementIdData::ElementIdData(InputElementIdData elemIdData)
```




\breif Element ids constructor.



**Parameters**:

* [InputElementIdData](structsysc_1_1InputElementIdData.md#structsysc_1_1InputElementIdData) **elemIdData**

**Return type**: 

**References**:

* [elementIds](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData_1ac98082ccca6778003a7785e4033fdcf7)

**Referenced by**:

* [ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData_1a39cc1f753def252933c52a6b73b72785)
* [ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData_1a2d4efcc91449a330e8ce7e5ad14ca309)
* [operator=](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData_1af4e14a9b2ab00bde4eb45d7996718dfe)
* [operator=](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData_1a8069f94a877116f8c9d25f570898bdd7)

<a id="structsysc_1_1ElementIdData_1a2bc3e191dedac4234791ebe8d2726efc"></a>
### Function ElementIdData

![][public]


```cpp
sysc::ElementIdData::ElementIdData(OutputIntegerData elementIds)
```


Constructor that takes cell ids.





**Parameters**:

* [OutputIntegerData](structsysc_1_1OutputIntegerData.md#structsysc_1_1OutputIntegerData) **elementIds**

**Return type**: 

**References**:

* [elementIds](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData_1ac98082ccca6778003a7785e4033fdcf7)

<a id="structsysc_1_1ElementIdData_1ad58ae6d869976ba9e7a110d49b6a47a2"></a>
### Function ElementIdData

![][public]


```cpp
sysc::ElementIdData::ElementIdData()=default
```


Default constructor.





**Return type**: 

<a id="structsysc_1_1ElementIdData_1a39cc1f753def252933c52a6b73b72785"></a>
### Function ElementIdData

![][public]


```cpp
sysc::ElementIdData::ElementIdData(const ElementIdData &)=default
```


Copy constructor.





**Parameters**:

* const [ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData) &

**Return type**: 

**References**:

* [ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData_1a89beffa7a332b682987c50e09eb2c04b)

<a id="structsysc_1_1ElementIdData_1a2d4efcc91449a330e8ce7e5ad14ca309"></a>
### Function ElementIdData

![][public]


```cpp
sysc::ElementIdData::ElementIdData(ElementIdData &&)=default
```


Move constructor.





**Parameters**:

* [ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData) &&

**Return type**: 

**References**:

* [ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData_1a89beffa7a332b682987c50e09eb2c04b)

<a id="structsysc_1_1ElementIdData_1af4e14a9b2ab00bde4eb45d7996718dfe"></a>
### Function operator=

![][public]


```cpp
ElementIdData & sysc::ElementIdData::operator=(const ElementIdData &)=default
```


Copy-assign operator.





**Parameters**:

* const [ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData) &

**Return type**: [ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData) &

**References**:

* [ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData_1a89beffa7a332b682987c50e09eb2c04b)

<a id="structsysc_1_1ElementIdData_1a8069f94a877116f8c9d25f570898bdd7"></a>
### Function operator=

![][public]


```cpp
ElementIdData & sysc::ElementIdData::operator=(ElementIdData &&)=default
```


Move-assign operator.





**Parameters**:

* [ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData) &&

**Return type**: [ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData) &

**References**:

* [ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData_1a89beffa7a332b682987c50e09eb2c04b)

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)