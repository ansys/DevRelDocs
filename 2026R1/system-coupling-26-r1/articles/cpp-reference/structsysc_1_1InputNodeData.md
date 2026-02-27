# Structure sysc::InputNodeData

![][C++]
![][public]

**Definition**: `MeshDefinition.hpp` (line 165)

Node data access struct, provides read-only access to the mesh nodes.



## Members

* [InputNodeData](structsysc_1_1InputNodeData.md#structsysc_1_1InputNodeData_1a8f4e9b51a738d05093a82ff808ec33df)
* [InputNodeData](structsysc_1_1InputNodeData.md#structsysc_1_1InputNodeData_1abe57debdaf182cf1d9f732d359b1599c)
* [InputNodeData](structsysc_1_1InputNodeData.md#structsysc_1_1InputNodeData_1a78137995ce976a2133702af1a5da01a3)
* [InputNodeData](structsysc_1_1InputNodeData.md#structsysc_1_1InputNodeData_1af201f31c32722a14ecddf2d780321e96)
* [InputNodeData](structsysc_1_1InputNodeData.md#structsysc_1_1InputNodeData_1a95ac270f79b70bd81026a40a3b05e8d9)
* [nodeCoords](structsysc_1_1InputNodeData.md#structsysc_1_1InputNodeData_1ac69ae58b5b75194b72ade7489be114d5)
* [nodeIds](structsysc_1_1InputNodeData.md#structsysc_1_1InputNodeData_1a8c516e25d944059e8752b5e495fb2643)
* [operator=](structsysc_1_1InputNodeData.md#structsysc_1_1InputNodeData_1a9b12cca63599a6356a504ffe26ef77af)
* [operator=](structsysc_1_1InputNodeData.md#structsysc_1_1InputNodeData_1a0031ce801d6b4f18122d6b8138416d97)
* [size](structsysc_1_1InputNodeData.md#structsysc_1_1InputNodeData_1a411ce2f0558650c5889dae864a22ea86)

## Public attributes

<a id="structsysc_1_1InputNodeData_1a8c516e25d944059e8752b5e495fb2643"></a>
### Variable nodeIds

![][public]

**Definition**: `MeshDefinition.hpp` (line 167)


```cpp
IntegerData sysc::InputNodeData::nodeIds
```


Node ids array access.





**Type**: [IntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData)

**Referenced by**:

* [InputNodeData](structsysc_1_1InputNodeData.md#structsysc_1_1InputNodeData_1a8f4e9b51a738d05093a82ff808ec33df)

<a id="structsysc_1_1InputNodeData_1ac69ae58b5b75194b72ade7489be114d5"></a>
### Variable nodeCoords

![][public]

**Definition**: `MeshDefinition.hpp` (line 170)


```cpp
VectorData sysc::InputNodeData::nodeCoords
```


Node coordinates array access.





**Type**: [VectorData](structsysc_1_1InputVectorData.md#structsysc_1_1InputVectorData)

**Referenced by**:

* [InputNodeData](structsysc_1_1InputNodeData.md#structsysc_1_1InputNodeData_1a8f4e9b51a738d05093a82ff808ec33df)
* [InputNodeData](structsysc_1_1InputNodeData.md#structsysc_1_1InputNodeData_1abe57debdaf182cf1d9f732d359b1599c)
* [operator=](structsysc_1_1InputNodeData.md#structsysc_1_1InputNodeData_1a0031ce801d6b4f18122d6b8138416d97)

## Public functions

<a id="structsysc_1_1InputNodeData_1a8f4e9b51a738d05093a82ff808ec33df"></a>
### Function InputNodeData

![][public]


```cpp
sysc::InputNodeData::InputNodeData(IntegerData nodeIds, VectorData nodeCoords)
```


Constructor that takes node ids and node coords in same order.





**Parameters**:

* [IntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData) **nodeIds**
* [VectorData](structsysc_1_1InputVectorData.md#structsysc_1_1InputVectorData) **nodeCoords**

**Return type**: 

**References**:

* [nodeCoords](structsysc_1_1InputNodeData.md#structsysc_1_1InputNodeData_1ac69ae58b5b75194b72ade7489be114d5)
* [nodeIds](structsysc_1_1InputNodeData.md#structsysc_1_1InputNodeData_1a8c516e25d944059e8752b5e495fb2643)

**Referenced by**:

* [InputNodeData](structsysc_1_1InputNodeData.md#structsysc_1_1InputNodeData_1af201f31c32722a14ecddf2d780321e96)
* [InputNodeData](structsysc_1_1InputNodeData.md#structsysc_1_1InputNodeData_1a95ac270f79b70bd81026a40a3b05e8d9)
* [operator=](structsysc_1_1InputNodeData.md#structsysc_1_1InputNodeData_1a9b12cca63599a6356a504ffe26ef77af)
* [operator=](structsysc_1_1InputNodeData.md#structsysc_1_1InputNodeData_1a0031ce801d6b4f18122d6b8138416d97)

<a id="structsysc_1_1InputNodeData_1abe57debdaf182cf1d9f732d359b1599c"></a>
### Function InputNodeData

![][public]


```cpp
sysc::InputNodeData::InputNodeData(VectorData nodeCoords)
```


Constructor that takes only node coords in ascending node ids order.





**Parameters**:

* [VectorData](structsysc_1_1InputVectorData.md#structsysc_1_1InputVectorData) **nodeCoords**

**Return type**: 

**References**:

* [nodeCoords](structsysc_1_1InputNodeData.md#structsysc_1_1InputNodeData_1ac69ae58b5b75194b72ade7489be114d5)

<a id="structsysc_1_1InputNodeData_1a78137995ce976a2133702af1a5da01a3"></a>
### Function InputNodeData

![][public]


```cpp
sysc::InputNodeData::InputNodeData()=default
```


Default constructor.





**Return type**: 

<a id="structsysc_1_1InputNodeData_1af201f31c32722a14ecddf2d780321e96"></a>
### Function InputNodeData

![][public]


```cpp
sysc::InputNodeData::InputNodeData(const InputNodeData &)=default
```


Copy constructor.





**Parameters**:

* const [InputNodeData](structsysc_1_1InputNodeData.md#structsysc_1_1InputNodeData) &

**Return type**: 

**References**:

* [InputNodeData](structsysc_1_1InputNodeData.md#structsysc_1_1InputNodeData_1a8f4e9b51a738d05093a82ff808ec33df)

<a id="structsysc_1_1InputNodeData_1a95ac270f79b70bd81026a40a3b05e8d9"></a>
### Function InputNodeData

![][public]


```cpp
sysc::InputNodeData::InputNodeData(InputNodeData &&)=default
```


Move constructor.





**Parameters**:

* [InputNodeData](structsysc_1_1InputNodeData.md#structsysc_1_1InputNodeData) &&

**Return type**: 

**References**:

* [InputNodeData](structsysc_1_1InputNodeData.md#structsysc_1_1InputNodeData_1a8f4e9b51a738d05093a82ff808ec33df)

<a id="structsysc_1_1InputNodeData_1a9b12cca63599a6356a504ffe26ef77af"></a>
### Function operator=

![][public]


```cpp
InputNodeData & sysc::InputNodeData::operator=(const InputNodeData &)=default
```


Copy-assign operator.





**Parameters**:

* const [InputNodeData](structsysc_1_1InputNodeData.md#structsysc_1_1InputNodeData) &

**Return type**: [InputNodeData](structsysc_1_1InputNodeData.md#structsysc_1_1InputNodeData) &

**References**:

* [InputNodeData](structsysc_1_1InputNodeData.md#structsysc_1_1InputNodeData_1a8f4e9b51a738d05093a82ff808ec33df)

<a id="structsysc_1_1InputNodeData_1a0031ce801d6b4f18122d6b8138416d97"></a>
### Function operator=

![][public]


```cpp
InputNodeData & sysc::InputNodeData::operator=(InputNodeData &&)=default
```


Move-assign operator.





**Parameters**:

* [InputNodeData](structsysc_1_1InputNodeData.md#structsysc_1_1InputNodeData) &&

**Return type**: [InputNodeData](structsysc_1_1InputNodeData.md#structsysc_1_1InputNodeData) &

**References**:

* [InputNodeData](structsysc_1_1InputNodeData.md#structsysc_1_1InputNodeData_1a8f4e9b51a738d05093a82ff808ec33df)
* [nodeCoords](structsysc_1_1InputNodeData.md#structsysc_1_1InputNodeData_1ac69ae58b5b75194b72ade7489be114d5)

<a id="structsysc_1_1InputNodeData_1a411ce2f0558650c5889dae864a22ea86"></a>
### Function size

![][public]
![][const]


```cpp
std::size_t sysc::InputNodeData::size() const noexcept
```








**Return type**: std::size_t

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)