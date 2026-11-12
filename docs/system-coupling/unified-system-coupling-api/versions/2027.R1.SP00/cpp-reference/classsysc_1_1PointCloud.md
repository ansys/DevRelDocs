# Class sysc::PointCloud

![][C++]
![][public]

**Definition**: `PointCloud.hpp` (line 82)

Provide a point cloud access class.

Provides read-only access to the point cloud for a given region.

## Members

* [checkValidity](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud_1a5624a75183bdf2f3783f135f69574872)
* [connectivityStamp](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud_1ab0fa91555fbc8c62debedf8fdb9336e2)
* [coordinatesStamp](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud_1a59b01ced48d42607a4e7e865b236e49c)
* [getNodeCoords](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud_1a7af3e505ed55ed9e9ad01ffc1dbf03c0)
* [getNodeIds](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud_1a5c5385f2219f3807902dd0227ba344c4)
* [getNumNodes](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud_1ad4a6bb5175f6fec7a5bfeaacfd2aea47)
* [m\_nodeCoords](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud_1a99024220a781ee1500a1c6ca3dd9d608)
* [m\_nodeIds](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud_1a29034e5e4d5516dd9fa3be286ecc98fe)
* [operator=](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud_1a78babf78bb0972dba58e1caade9eb15d)
* [operator=](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud_1a1849d96d82aea44c8c79c9938362e83e)
* [partitioningStamp](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud_1a1e32fdf88ff05b2af20659bfd94f5fc0)
* [PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud_1acd4950409dbb26fe93792b76812a58ab)
* [PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud_1a1ced7091c7926176bf1cd0a0e3295056)
* [PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud_1acc45998b6b9a302675bca9b60d329d9c)
* [PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud_1a070807ab97916c768bf33b3f70fff431)
* [PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud_1a3581e641adfc3a77d6e7fb1f896a23b7)
* [size](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud_1ac7bcaef4683d4bdfdc8be2bee75883b6)

## Public attributes

<a id="classsysc_1_1PointCloud_1ab0fa91555fbc8c62debedf8fdb9336e2"></a>
### Variable connectivityStamp

![][public]

**Definition**: `PointCloud.hpp` (line 86)


```cpp
std::int64_t sysc::PointCloud::connectivityStamp {0}
```


Connectivity stamp. Update whenever point cloud properties, other than coordinates, are updated (e.g. number of points, points order).





**Type**: std::int64_t

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"sysc::PointCloud::connectivityStamp"}]}`
-->

<a id="classsysc_1_1PointCloud_1a59b01ced48d42607a4e7e865b236e49c"></a>
### Variable coordinatesStamp

![][public]

**Definition**: `PointCloud.hpp` (line 90)


```cpp
std::int64_t sysc::PointCloud::coordinatesStamp {0}
```


Nodal coordinates stamp. Update whenever coordinates get updated.





**Type**: std::int64_t

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"sysc::PointCloud::coordinatesStamp"}]}`
-->

<a id="classsysc_1_1PointCloud_1a1e32fdf88ff05b2af20659bfd94f5fc0"></a>
### Variable partitioningStamp

![][public]

**Definition**: `PointCloud.hpp` (line 94)


```cpp
std::int64_t sysc::PointCloud::partitioningStamp {0}
```


Partitioning stamp. Update whenever the point cloud is re-partitioned.





**Type**: std::int64_t

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"sysc::PointCloud::partitioningStamp"}]}`
-->

## Private attributes

<a id="classsysc_1_1PointCloud_1a29034e5e4d5516dd9fa3be286ecc98fe"></a>
### Variable m\_nodeIds

![][private]

**Definition**: `PointCloud.hpp` (line 163)


```cpp
OutputIntegerData sysc::PointCloud::m_nodeIds
```








**Type**: [OutputIntegerData](structsysc_1_1OutputIntegerData.md#structsysc_1_1OutputIntegerData)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"sysc::PointCloud::m_nodeIds"}]}`
-->

<a id="classsysc_1_1PointCloud_1a99024220a781ee1500a1c6ca3dd9d608"></a>
### Variable m\_nodeCoords

![][private]

**Definition**: `PointCloud.hpp` (line 164)


```cpp
OutputVectorData sysc::PointCloud::m_nodeCoords
```








**Type**: [OutputVectorData](structsysc_1_1OutputVectorData.md#structsysc_1_1OutputVectorData)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"sysc::PointCloud::m_nodeCoords"}]}`
-->

## Public functions

<a id="classsysc_1_1PointCloud_1acd4950409dbb26fe93792b76812a58ab"></a>
### Function PointCloud

![][public]


```cpp
sysc::PointCloud::PointCloud(InputPointCloud ipc)
```


Construct [PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud) from [InputPointCloud](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud).





**Parameters**:

* [InputPointCloud](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud) **ipc**

**Return type**: 

**Referenced by**:

* [operator=](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud_1a78babf78bb0972dba58e1caade9eb15d)
* [operator=](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud_1a1849d96d82aea44c8c79c9938362e83e)
* [PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud_1a070807ab97916c768bf33b3f70fff431)
* [PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud_1a3581e641adfc3a77d6e7fb1f896a23b7)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"sysc::PointCloud::PointCloud"}]}`
-->

<a id="classsysc_1_1PointCloud_1a1ced7091c7926176bf1cd0a0e3295056"></a>
### Function PointCloud

![][public]


```cpp
sysc::PointCloud::PointCloud(OutputIntegerData nodeIds, OutputVectorData nodeCoords)
```


Constructor for [PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud) class.

**Parameters**:

* **nodeIds**: - output integer data access for node ids
* **nodeCoords**: - output vector data access for node coordinates



**Parameters**:

* [OutputIntegerData](structsysc_1_1OutputIntegerData.md#structsysc_1_1OutputIntegerData) **nodeIds**
* [OutputVectorData](structsysc_1_1OutputVectorData.md#structsysc_1_1OutputVectorData) **nodeCoords**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"sysc::PointCloud::PointCloud"}]}`
-->

<a id="classsysc_1_1PointCloud_1acc45998b6b9a302675bca9b60d329d9c"></a>
### Function PointCloud

![][public]


```cpp
sysc::PointCloud::PointCloud()=default
```


Provide a default constructor.





**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"sysc::PointCloud::PointCloud"}]}`
-->

<a id="classsysc_1_1PointCloud_1a070807ab97916c768bf33b3f70fff431"></a>
### Function PointCloud

![][public]


```cpp
sysc::PointCloud::PointCloud(const PointCloud &)=default
```


Provide a copy-constructor.





**Parameters**:

* const [PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud) &

**Return type**: 

**References**:

* [PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud_1acd4950409dbb26fe93792b76812a58ab)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"sysc::PointCloud::PointCloud"}]}`
-->

<a id="classsysc_1_1PointCloud_1a3581e641adfc3a77d6e7fb1f896a23b7"></a>
### Function PointCloud

![][public]


```cpp
sysc::PointCloud::PointCloud(PointCloud &&)=default
```


Provide a move-constructor.





**Parameters**:

* [PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud) &&

**Return type**: 

**References**:

* [PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud_1acd4950409dbb26fe93792b76812a58ab)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"sysc::PointCloud::PointCloud"}]}`
-->

<a id="classsysc_1_1PointCloud_1a78babf78bb0972dba58e1caade9eb15d"></a>
### Function operator=

![][public]


```cpp
PointCloud & sysc::PointCloud::operator=(const PointCloud &)=default
```


Provide a copy-assign operator.





**Parameters**:

* const [PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud) &

**Return type**: [PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud) &

**References**:

* [PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud_1acd4950409dbb26fe93792b76812a58ab)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"sysc::PointCloud::operator="}]}`
-->

<a id="classsysc_1_1PointCloud_1a1849d96d82aea44c8c79c9938362e83e"></a>
### Function operator=

![][public]


```cpp
PointCloud & sysc::PointCloud::operator=(PointCloud &&)=default
```


Provide a move-assign operator.





**Parameters**:

* [PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud) &&

**Return type**: [PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud) &

**References**:

* [PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud_1acd4950409dbb26fe93792b76812a58ab)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"sysc::PointCloud::operator="}]}`
-->

<a id="classsysc_1_1PointCloud_1ad4a6bb5175f6fec7a5bfeaacfd2aea47"></a>
### Function getNumNodes

![][public]
![][const]


```cpp
std::size_t sysc::PointCloud::getNumNodes() const noexcept
```


Provide a method to get the number of nodes for this mesh.





**Return type**: std::size_t

**Referenced by**:

* [size](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud_1ac7bcaef4683d4bdfdc8be2bee75883b6)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"sysc::PointCloud::getNumNodes"}]}`
-->

<a id="classsysc_1_1PointCloud_1a5c5385f2219f3807902dd0227ba344c4"></a>
### Function getNodeIds

![][public]
![][const]


```cpp
OutputIntegerData sysc::PointCloud::getNodeIds() const
```


Provide a method to access node ids array.





**Return type**: [OutputIntegerData](structsysc_1_1OutputIntegerData.md#structsysc_1_1OutputIntegerData)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"sysc::PointCloud::getNodeIds"}]}`
-->

<a id="classsysc_1_1PointCloud_1a7af3e505ed55ed9e9ad01ffc1dbf03c0"></a>
### Function getNodeCoords

![][public]
![][const]


```cpp
OutputVectorData sysc::PointCloud::getNodeCoords() const
```


Provide a method to access node coordinates array.





**Return type**: [OutputVectorData](structsysc_1_1OutputVectorData.md#structsysc_1_1OutputVectorData)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"sysc::PointCloud::getNodeCoords"}]}`
-->

<a id="classsysc_1_1PointCloud_1a5624a75183bdf2f3783f135f69574872"></a>
### Function checkValidity

![][public]
![][const]


```cpp
ValidityStatus sysc::PointCloud::checkValidity() const
```


Provide a method to perform simple validity checks.





**Return type**: [ValidityStatus](structsysc_1_1ValidityStatus.md#structsysc_1_1ValidityStatus)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"sysc::PointCloud::checkValidity"}]}`
-->

<a id="classsysc_1_1PointCloud_1ac7bcaef4683d4bdfdc8be2bee75883b6"></a>
### Function size

![][public]
![][const]


```cpp
std::size_t sysc::PointCloud::size() const noexcept
```


Provide a method to get the number of nodes for this mesh.





**Return type**: std::size_t

**References**:

* [getNumNodes](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud_1ad4a6bb5175f6fec7a5bfeaacfd2aea47)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"sysc::PointCloud::size"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"PointCloud_8hpp"},"children":[{"type":"text","text":"PointCloud.hpp"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)