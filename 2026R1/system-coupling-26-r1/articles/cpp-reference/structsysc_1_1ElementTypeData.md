# Structure sysc::ElementTypeData

![][C++]
![][public]

**Definition**: `MeshDefinition.hpp` (line 370)

Element types access struct, provides read-only access to the mesh element types.



## Members

* [ElementTypeData](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData_1af2251edaadb5ffdc2854ee3cd84c24ff)
* [ElementTypeData](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData_1a0587e655031ee7e47a65c0e93a6fb616)
* [ElementTypeData](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData_1ab51a5e9174c8b5d81047868e9a6e58bc)
* [ElementTypeData](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData_1af9ed3a9f4cc9786394ec494decf23126)
* [ElementTypeData](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData_1a28778cc3be9c38556f7a7f5c9c2916b5)
* [elementTypes](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData_1a7f626af81dbf262bebcc32582b8e1b08)
* [operator=](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData_1a5dd51fc3f9409b6acbe494163819df4f)
* [operator=](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData_1a86e807ce106e45453f3d029ff32f228e)

## Public attributes

<a id="structsysc_1_1ElementTypeData_1a7f626af81dbf262bebcc32582b8e1b08"></a>
### Variable elementTypes

![][public]

**Definition**: `MeshDefinition.hpp` (line 372)


```cpp
OutputIntegerData sysc::ElementTypeData::elementTypes
```


Element types array access.





**Type**: [OutputIntegerData](structsysc_1_1OutputIntegerData.md#structsysc_1_1OutputIntegerData)

**Referenced by**:

* [ElementTypeData](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData_1af2251edaadb5ffdc2854ee3cd84c24ff)
* [ElementTypeData](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData_1a0587e655031ee7e47a65c0e93a6fb616)

## Public functions

<a id="structsysc_1_1ElementTypeData_1af2251edaadb5ffdc2854ee3cd84c24ff"></a>
### Function ElementTypeData

![][public]


```cpp
sysc::ElementTypeData::ElementTypeData(InputElementTypeData elemTypeData)
```


Constructor.





**Parameters**:

* [InputElementTypeData](structsysc_1_1InputElementTypeData.md#structsysc_1_1InputElementTypeData) **elemTypeData**

**Return type**: 

**References**:

* [elementTypes](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData_1a7f626af81dbf262bebcc32582b8e1b08)

**Referenced by**:

* [ElementTypeData](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData_1af9ed3a9f4cc9786394ec494decf23126)
* [ElementTypeData](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData_1a28778cc3be9c38556f7a7f5c9c2916b5)
* [operator=](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData_1a5dd51fc3f9409b6acbe494163819df4f)
* [operator=](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData_1a86e807ce106e45453f3d029ff32f228e)

<a id="structsysc_1_1ElementTypeData_1a0587e655031ee7e47a65c0e93a6fb616"></a>
### Function ElementTypeData

![][public]


```cpp
sysc::ElementTypeData::ElementTypeData(OutputIntegerData elementTypes)
```


Constructor that takes element types.





**Parameters**:

* [OutputIntegerData](structsysc_1_1OutputIntegerData.md#structsysc_1_1OutputIntegerData) **elementTypes**

**Return type**: 

**References**:

* [elementTypes](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData_1a7f626af81dbf262bebcc32582b8e1b08)

<a id="structsysc_1_1ElementTypeData_1ab51a5e9174c8b5d81047868e9a6e58bc"></a>
### Function ElementTypeData

![][public]


```cpp
sysc::ElementTypeData::ElementTypeData()=default
```


Default constructor.





**Return type**: 

<a id="structsysc_1_1ElementTypeData_1af9ed3a9f4cc9786394ec494decf23126"></a>
### Function ElementTypeData

![][public]


```cpp
sysc::ElementTypeData::ElementTypeData(const ElementTypeData &)=default
```


Copy constructor.





**Parameters**:

* const [ElementTypeData](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData) &

**Return type**: 

**References**:

* [ElementTypeData](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData_1af2251edaadb5ffdc2854ee3cd84c24ff)

<a id="structsysc_1_1ElementTypeData_1a28778cc3be9c38556f7a7f5c9c2916b5"></a>
### Function ElementTypeData

![][public]


```cpp
sysc::ElementTypeData::ElementTypeData(ElementTypeData &&)=default
```


Move constructor.





**Parameters**:

* [ElementTypeData](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData) &&

**Return type**: 

**References**:

* [ElementTypeData](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData_1af2251edaadb5ffdc2854ee3cd84c24ff)

<a id="structsysc_1_1ElementTypeData_1a5dd51fc3f9409b6acbe494163819df4f"></a>
### Function operator=

![][public]


```cpp
ElementTypeData & sysc::ElementTypeData::operator=(const ElementTypeData &)=default
```


Copy-assign operator.





**Parameters**:

* const [ElementTypeData](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData) &

**Return type**: [ElementTypeData](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData) &

**References**:

* [ElementTypeData](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData_1af2251edaadb5ffdc2854ee3cd84c24ff)

<a id="structsysc_1_1ElementTypeData_1a86e807ce106e45453f3d029ff32f228e"></a>
### Function operator=

![][public]


```cpp
ElementTypeData & sysc::ElementTypeData::operator=(ElementTypeData &&)=default
```


Move-assign operator.





**Parameters**:

* [ElementTypeData](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData) &&

**Return type**: [ElementTypeData](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData) &

**References**:

* [ElementTypeData](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData_1af2251edaadb5ffdc2854ee3cd84c24ff)

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)