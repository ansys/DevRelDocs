# Structure sysc::NodeData

![][C++]
![][public]

**Definition**: `MeshDefinition.hpp` (line 533)

Node data access struct, provides read-only access to the mesh nodes.



## Members

* [nodeCoords](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1abdcd98cafd25df6b765a63447f8f31a4)
* [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1a7ed7002dbee2dc944811525ea916815c)
* [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1a31950cfc2da55dd8da96b7f33f90fef0)
* [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1a69294cbb76cbfb7736b77c3b15518407)
* [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1ae5b86f2e6b88d7354620bc6013e7301c)
* [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1acc9254f0f146c5bffc87b4f23aa74507)
* [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1a01940c5e5e4f97d04e738ce5f8fee0a0)
* [nodeIds](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1a2b8d2f98597580854d5698d9a600f367)
* [operator=](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1af4faedac4fea32a3560c08dccdc16a45)
* [operator=](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1acd36668b1f4bc7cac89a6461c17f2df8)
* [size](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1ac70902e3bc360d1b73e3fb2a6c3b344e)

## Public attributes

<a id="structsysc_1_1NodeData_1a2b8d2f98597580854d5698d9a600f367"></a>
### Variable nodeIds

![][public]

**Definition**: `MeshDefinition.hpp` (line 535)


```cpp
OutputIntegerData sysc::NodeData::nodeIds
```


Node ids array access.





**Type**: [OutputIntegerData](structsysc_1_1OutputIntegerData.md#structsysc_1_1OutputIntegerData)

**Referenced by**:

* [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1a01940c5e5e4f97d04e738ce5f8fee0a0)
* [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1a7ed7002dbee2dc944811525ea916815c)

<a id="structsysc_1_1NodeData_1abdcd98cafd25df6b765a63447f8f31a4"></a>
### Variable nodeCoords

![][public]

**Definition**: `MeshDefinition.hpp` (line 538)


```cpp
OutputVectorData sysc::NodeData::nodeCoords
```


Node coordinates array access.





**Type**: [OutputVectorData](structsysc_1_1OutputVectorData.md#structsysc_1_1OutputVectorData)

**Referenced by**:

* [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1a01940c5e5e4f97d04e738ce5f8fee0a0)
* [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1a7ed7002dbee2dc944811525ea916815c)
* [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1a31950cfc2da55dd8da96b7f33f90fef0)

## Public functions

<a id="structsysc_1_1NodeData_1a7ed7002dbee2dc944811525ea916815c"></a>
### Function NodeData

![][public]


```cpp
sysc::NodeData::NodeData(OutputIntegerData nodeIds, OutputVectorData nodeCoords)
```


Constructor that takes node ids and node coords in same order.





**Parameters**:

* [OutputIntegerData](structsysc_1_1OutputIntegerData.md#structsysc_1_1OutputIntegerData) **nodeIds**
* [OutputVectorData](structsysc_1_1OutputVectorData.md#structsysc_1_1OutputVectorData) **nodeCoords**

**Return type**: 

**References**:

* [nodeCoords](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1abdcd98cafd25df6b765a63447f8f31a4)
* [nodeIds](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1a2b8d2f98597580854d5698d9a600f367)

**Referenced by**:

* [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1ae5b86f2e6b88d7354620bc6013e7301c)
* [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1a01940c5e5e4f97d04e738ce5f8fee0a0)
* [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1acc9254f0f146c5bffc87b4f23aa74507)
* [operator=](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1af4faedac4fea32a3560c08dccdc16a45)
* [operator=](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1acd36668b1f4bc7cac89a6461c17f2df8)

<a id="structsysc_1_1NodeData_1a31950cfc2da55dd8da96b7f33f90fef0"></a>
### Function NodeData

![][public]


```cpp
sysc::NodeData::NodeData(OutputVectorData nodeCoords)
```


Constructor that takes only node coords in ascending node ids order.





**Parameters**:

* [OutputVectorData](structsysc_1_1OutputVectorData.md#structsysc_1_1OutputVectorData) **nodeCoords**

**Return type**: 

**References**:

* [nodeCoords](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1abdcd98cafd25df6b765a63447f8f31a4)

<a id="structsysc_1_1NodeData_1a69294cbb76cbfb7736b77c3b15518407"></a>
### Function NodeData

![][public]


```cpp
sysc::NodeData::NodeData()=default
```


Default constructor.





**Return type**: 

<a id="structsysc_1_1NodeData_1ae5b86f2e6b88d7354620bc6013e7301c"></a>
### Function NodeData

![][public]


```cpp
sysc::NodeData::NodeData(const NodeData &)=default
```


Copy constructor.





**Parameters**:

* const [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData) &

**Return type**: 

**References**:

* [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1a7ed7002dbee2dc944811525ea916815c)

<a id="structsysc_1_1NodeData_1acc9254f0f146c5bffc87b4f23aa74507"></a>
### Function NodeData

![][public]


```cpp
sysc::NodeData::NodeData(NodeData &&)=default
```


Move constructor.





**Parameters**:

* [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData) &&

**Return type**: 

**References**:

* [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1a7ed7002dbee2dc944811525ea916815c)

<a id="structsysc_1_1NodeData_1af4faedac4fea32a3560c08dccdc16a45"></a>
### Function operator=

![][public]


```cpp
NodeData & sysc::NodeData::operator=(const NodeData &)=default
```


Copy-assign operator.





**Parameters**:

* const [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData) &

**Return type**: [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData) &

**References**:

* [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1a7ed7002dbee2dc944811525ea916815c)

<a id="structsysc_1_1NodeData_1acd36668b1f4bc7cac89a6461c17f2df8"></a>
### Function operator=

![][public]


```cpp
NodeData & sysc::NodeData::operator=(NodeData &&)=default
```


Move-assign operator.





**Parameters**:

* [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData) &&

**Return type**: [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData) &

**References**:

* [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1a7ed7002dbee2dc944811525ea916815c)

<a id="structsysc_1_1NodeData_1a01940c5e5e4f97d04e738ce5f8fee0a0"></a>
### Function NodeData

![][public]


```cpp
sysc::NodeData::NodeData(InputNodeData inputData)
```


Constructor from input data.





**Parameters**:

* [InputNodeData](structsysc_1_1InputNodeData.md#structsysc_1_1InputNodeData) **inputData**

**Return type**: 

**References**:

* [nodeCoords](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1abdcd98cafd25df6b765a63447f8f31a4)
* [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1a7ed7002dbee2dc944811525ea916815c)
* [nodeIds](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1a2b8d2f98597580854d5698d9a600f367)

<a id="structsysc_1_1NodeData_1ac70902e3bc360d1b73e3fb2a6c3b344e"></a>
### Function size

![][public]
![][const]


```cpp
std::size_t sysc::NodeData::size() const noexcept
```








**Return type**: std::size_t

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)