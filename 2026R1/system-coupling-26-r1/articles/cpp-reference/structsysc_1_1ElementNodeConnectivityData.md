# Structure sysc::ElementNodeConnectivityData

![][C++]
![][public]

**Definition**: `MeshDefinition.hpp` (line 437)

Describes element-to-node connectivity.



## Members

* [ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData_1a3d633376c42d27810acf6e9e7b256b2b)
* [ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData_1a8f16a7e5fd8a94bc018ec22f188bb3c3)
* [ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData_1ac314284a846e37733a53f18bcc035730)
* [ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData_1a54709b2109b645ba08dbd36df58ef0e4)
* [ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData_1afea7915624bf249ee18e3b6590fc9652)
* [elemNodeIds](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData_1a05900eb58a87d76c8f370123db44acb5)
* [operator=](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData_1a96e1ab4a5b11d1112ea8d3803817e583)
* [operator=](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData_1a6818476bd20544e189d48ebf17184e76)

## Public attributes

<a id="structsysc_1_1ElementNodeConnectivityData_1a05900eb58a87d76c8f370123db44acb5"></a>
### Variable elemNodeIds

![][public]

**Definition**: `MeshDefinition.hpp` (line 438)


```cpp
OutputIntegerData sysc::ElementNodeConnectivityData::elemNodeIds
```




Element-to-node connectivity array.



**Type**: [OutputIntegerData](structsysc_1_1OutputIntegerData.md#structsysc_1_1OutputIntegerData)

**Referenced by**:

* [ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData_1a8f16a7e5fd8a94bc018ec22f188bb3c3)
* [ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData_1a3d633376c42d27810acf6e9e7b256b2b)

## Public functions

<a id="structsysc_1_1ElementNodeConnectivityData_1a3d633376c42d27810acf6e9e7b256b2b"></a>
### Function ElementNodeConnectivityData

![][public]


```cpp
sysc::ElementNodeConnectivityData::ElementNodeConnectivityData(InputElementNodeConnectivityData inputData)
```


Constructor.





**Parameters**:

* [InputElementNodeConnectivityData](structsysc_1_1InputElementNodeConnectivityData.md#structsysc_1_1InputElementNodeConnectivityData) **inputData**

**Return type**: 

**References**:

* [elemNodeIds](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData_1a05900eb58a87d76c8f370123db44acb5)

**Referenced by**:

* [ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData_1a54709b2109b645ba08dbd36df58ef0e4)
* [ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData_1afea7915624bf249ee18e3b6590fc9652)
* [operator=](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData_1a96e1ab4a5b11d1112ea8d3803817e583)
* [operator=](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData_1a6818476bd20544e189d48ebf17184e76)

<a id="structsysc_1_1ElementNodeConnectivityData_1a8f16a7e5fd8a94bc018ec22f188bb3c3"></a>
### Function ElementNodeConnectivityData

![][public]


```cpp
sysc::ElementNodeConnectivityData::ElementNodeConnectivityData(const OutputIntegerData &elemNodeIds)
```


Constructor that takes element-to-node connectivity array.





**Parameters**:

* const [OutputIntegerData](structsysc_1_1OutputIntegerData.md#structsysc_1_1OutputIntegerData) & **elemNodeIds**

**Return type**: 

**References**:

* [elemNodeIds](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData_1a05900eb58a87d76c8f370123db44acb5)

<a id="structsysc_1_1ElementNodeConnectivityData_1ac314284a846e37733a53f18bcc035730"></a>
### Function ElementNodeConnectivityData

![][public]


```cpp
sysc::ElementNodeConnectivityData::ElementNodeConnectivityData()=default
```


Default constructor.





**Return type**: 

<a id="structsysc_1_1ElementNodeConnectivityData_1a54709b2109b645ba08dbd36df58ef0e4"></a>
### Function ElementNodeConnectivityData

![][public]


```cpp
sysc::ElementNodeConnectivityData::ElementNodeConnectivityData(const ElementNodeConnectivityData &)=default
```


Copy constructor.





**Parameters**:

* const [ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData) &

**Return type**: 

**References**:

* [ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData_1a3d633376c42d27810acf6e9e7b256b2b)

<a id="structsysc_1_1ElementNodeConnectivityData_1afea7915624bf249ee18e3b6590fc9652"></a>
### Function ElementNodeConnectivityData

![][public]


```cpp
sysc::ElementNodeConnectivityData::ElementNodeConnectivityData(ElementNodeConnectivityData &&)=default
```


Move constructor.





**Parameters**:

* [ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData) &&

**Return type**: 

**References**:

* [ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData_1a3d633376c42d27810acf6e9e7b256b2b)

<a id="structsysc_1_1ElementNodeConnectivityData_1a96e1ab4a5b11d1112ea8d3803817e583"></a>
### Function operator=

![][public]


```cpp
ElementNodeConnectivityData & sysc::ElementNodeConnectivityData::operator=(const ElementNodeConnectivityData &)=default
```


Copy-assign operator.





**Parameters**:

* const [ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData) &

**Return type**: [ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData) &

**References**:

* [ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData_1a3d633376c42d27810acf6e9e7b256b2b)

<a id="structsysc_1_1ElementNodeConnectivityData_1a6818476bd20544e189d48ebf17184e76"></a>
### Function operator=

![][public]


```cpp
ElementNodeConnectivityData & sysc::ElementNodeConnectivityData::operator=(ElementNodeConnectivityData &&)=default
```


Move-assign operator.





**Parameters**:

* [ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData) &&

**Return type**: [ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData) &

**References**:

* [ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData_1a3d633376c42d27810acf6e9e7b256b2b)

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)