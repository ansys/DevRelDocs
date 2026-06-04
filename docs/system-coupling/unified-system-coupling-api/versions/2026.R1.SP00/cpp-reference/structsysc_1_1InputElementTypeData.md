# Structure sysc::InputElementTypeData

![][C++]
![][public]

**Definition**: `MeshDefinition.hpp` (line 56)

Element types access struct, provides read-and-write access to the mesh element types.



## Members

* [elementTypes](structsysc_1_1InputElementTypeData.md#structsysc_1_1InputElementTypeData_1a8ee847f01bd9d8a45cf7a4207f814e21)
* [InputElementTypeData](structsysc_1_1InputElementTypeData.md#structsysc_1_1InputElementTypeData_1ae4b7b18aa3cd178a52b49ad10befdeec)
* [InputElementTypeData](structsysc_1_1InputElementTypeData.md#structsysc_1_1InputElementTypeData_1a7a5b3486c7f2ad0c519cbaba660c2143)
* [InputElementTypeData](structsysc_1_1InputElementTypeData.md#structsysc_1_1InputElementTypeData_1a09e45bf90f44bea1213e4e0dbf074313)
* [InputElementTypeData](structsysc_1_1InputElementTypeData.md#structsysc_1_1InputElementTypeData_1add7c27bf7247c57513dbafeb44b2bfb4)
* [operator=](structsysc_1_1InputElementTypeData.md#structsysc_1_1InputElementTypeData_1a20ca9e71eed7ca4861bedbf29880344a)
* [operator=](structsysc_1_1InputElementTypeData.md#structsysc_1_1InputElementTypeData_1a207ccb14ef4d66141ace2c21c83d5fff)

## Public attributes

<a id="structsysc_1_1InputElementTypeData_1a8ee847f01bd9d8a45cf7a4207f814e21"></a>
### Variable elementTypes

![][public]

**Definition**: `MeshDefinition.hpp` (line 58)


```cpp
IntegerData sysc::InputElementTypeData::elementTypes
```


Element types array access.





**Type**: [IntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData)

**Referenced by**:

* [InputElementTypeData](structsysc_1_1InputElementTypeData.md#structsysc_1_1InputElementTypeData_1ae4b7b18aa3cd178a52b49ad10befdeec)

## Public functions

<a id="structsysc_1_1InputElementTypeData_1ae4b7b18aa3cd178a52b49ad10befdeec"></a>
### Function InputElementTypeData

![][public]


```cpp
sysc::InputElementTypeData::InputElementTypeData(IntegerData elementTypes)
```


Constructor that takes element types.





**Parameters**:

* [IntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData) **elementTypes**

**Return type**: 

**References**:

* [elementTypes](structsysc_1_1InputElementTypeData.md#structsysc_1_1InputElementTypeData_1a8ee847f01bd9d8a45cf7a4207f814e21)

**Referenced by**:

* [InputElementTypeData](structsysc_1_1InputElementTypeData.md#structsysc_1_1InputElementTypeData_1a09e45bf90f44bea1213e4e0dbf074313)
* [InputElementTypeData](structsysc_1_1InputElementTypeData.md#structsysc_1_1InputElementTypeData_1add7c27bf7247c57513dbafeb44b2bfb4)
* [operator=](structsysc_1_1InputElementTypeData.md#structsysc_1_1InputElementTypeData_1a20ca9e71eed7ca4861bedbf29880344a)
* [operator=](structsysc_1_1InputElementTypeData.md#structsysc_1_1InputElementTypeData_1a207ccb14ef4d66141ace2c21c83d5fff)

<a id="structsysc_1_1InputElementTypeData_1a7a5b3486c7f2ad0c519cbaba660c2143"></a>
### Function InputElementTypeData

![][public]


```cpp
sysc::InputElementTypeData::InputElementTypeData()=default
```


Default constructor.





**Return type**: 

<a id="structsysc_1_1InputElementTypeData_1a09e45bf90f44bea1213e4e0dbf074313"></a>
### Function InputElementTypeData

![][public]


```cpp
sysc::InputElementTypeData::InputElementTypeData(const InputElementTypeData &)=default
```


Copy constructor.





**Parameters**:

* const [InputElementTypeData](structsysc_1_1InputElementTypeData.md#structsysc_1_1InputElementTypeData) &

**Return type**: 

**References**:

* [InputElementTypeData](structsysc_1_1InputElementTypeData.md#structsysc_1_1InputElementTypeData_1ae4b7b18aa3cd178a52b49ad10befdeec)

<a id="structsysc_1_1InputElementTypeData_1add7c27bf7247c57513dbafeb44b2bfb4"></a>
### Function InputElementTypeData

![][public]


```cpp
sysc::InputElementTypeData::InputElementTypeData(InputElementTypeData &&)=default
```


Move constructor.





**Parameters**:

* [InputElementTypeData](structsysc_1_1InputElementTypeData.md#structsysc_1_1InputElementTypeData) &&

**Return type**: 

**References**:

* [InputElementTypeData](structsysc_1_1InputElementTypeData.md#structsysc_1_1InputElementTypeData_1ae4b7b18aa3cd178a52b49ad10befdeec)

<a id="structsysc_1_1InputElementTypeData_1a20ca9e71eed7ca4861bedbf29880344a"></a>
### Function operator=

![][public]


```cpp
InputElementTypeData & sysc::InputElementTypeData::operator=(const InputElementTypeData &)=default
```


Copy-assign operator.





**Parameters**:

* const [InputElementTypeData](structsysc_1_1InputElementTypeData.md#structsysc_1_1InputElementTypeData) &

**Return type**: [InputElementTypeData](structsysc_1_1InputElementTypeData.md#structsysc_1_1InputElementTypeData) &

**References**:

* [InputElementTypeData](structsysc_1_1InputElementTypeData.md#structsysc_1_1InputElementTypeData_1ae4b7b18aa3cd178a52b49ad10befdeec)

<a id="structsysc_1_1InputElementTypeData_1a207ccb14ef4d66141ace2c21c83d5fff"></a>
### Function operator=

![][public]


```cpp
InputElementTypeData & sysc::InputElementTypeData::operator=(InputElementTypeData &&)=default
```


Move-assign operator.





**Parameters**:

* [InputElementTypeData](structsysc_1_1InputElementTypeData.md#structsysc_1_1InputElementTypeData) &&

**Return type**: [InputElementTypeData](structsysc_1_1InputElementTypeData.md#structsysc_1_1InputElementTypeData) &

**References**:

* [InputElementTypeData](structsysc_1_1InputElementTypeData.md#structsysc_1_1InputElementTypeData_1ae4b7b18aa3cd178a52b49ad10befdeec)

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)