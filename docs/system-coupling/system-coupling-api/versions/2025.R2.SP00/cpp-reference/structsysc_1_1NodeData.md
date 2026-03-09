# Structure sysc::NodeData

![][C++]
![][public]

**Definition**: `MeshDefinition.hpp` (line 194)

Node data access struct, provides read-only access to the mesh nodes.



## Members

* [nodeCoords](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1abdcd98cafd25df6b765a63447f8f31a4)
* [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1a7ed7002dbee2dc944811525ea916815c)
* [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1a31950cfc2da55dd8da96b7f33f90fef0)
* [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1a69294cbb76cbfb7736b77c3b15518407)
* [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1ae5b86f2e6b88d7354620bc6013e7301c)
* [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1acc9254f0f146c5bffc87b4f23aa74507)
* [nodeIds](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1a2b8d2f98597580854d5698d9a600f367)
* [operator=](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1a5ab4a36630d10f598a06b7a20dfdef63)
* [operator=](structsysc_1_1NodeData.md#structsysc_1_1NodeData_1a2da12b3830da1280d59254e4a671aa64)

## Public attributes

<a id="structsysc_1_1NodeData_1a2b8d2f98597580854d5698d9a600f367"></a>
### Variable nodeIds

![][public]

**Definition**: `MeshDefinition.hpp` (line 196)

```cpp
OutputIntegerData sysc::NodeData::nodeIds
```

Node ids array access.





**Type**: [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData)

<a id="structsysc_1_1NodeData_1abdcd98cafd25df6b765a63447f8f31a4"></a>
### Variable nodeCoords

![][public]

**Definition**: `MeshDefinition.hpp` (line 199)

```cpp
OutputVectorData sysc::NodeData::nodeCoords
```

Node coordinates array access.





**Type**: [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData)

## Public functions

<a id="structsysc_1_1NodeData_1a7ed7002dbee2dc944811525ea916815c"></a>
### Function NodeData

![][public]

```cpp
sysc::NodeData::NodeData(OutputIntegerData nodeIds, OutputVectorData nodeCoords)
```

Constructor that takes node ids and node coords in same order.





**Parameters**:

* [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData) **nodeIds**
* [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData) **nodeCoords**

**Return type**: 

<a id="structsysc_1_1NodeData_1a31950cfc2da55dd8da96b7f33f90fef0"></a>
### Function NodeData

![][public]

```cpp
sysc::NodeData::NodeData(OutputVectorData nodeCoords)
```

Constructor that takes only node coords in ascending node ids order.





**Parameters**:

* [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData) **nodeCoords**

**Return type**: 

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

<a id="structsysc_1_1NodeData_1a5ab4a36630d10f598a06b7a20dfdef63"></a>
### Function operator=

![][public]

```cpp
NodeData& sysc::NodeData::operator=(const NodeData &)=default
```

Copy-assign operator.





**Parameters**:

* const [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData) &

**Return type**: [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData) &

<a id="structsysc_1_1NodeData_1a2da12b3830da1280d59254e4a671aa64"></a>
### Function operator=

![][public]

```cpp
NodeData& sysc::NodeData::operator=(NodeData &&)=default
```

Move-assign operator.





**Parameters**:

* [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData) &&

**Return type**: [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData) &

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)