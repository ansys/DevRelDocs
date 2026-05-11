# Class sysc::PointCloud

![][C++]
![][public]

**Definition**: `PointCloud.hpp` (line 27)

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
* [operator=](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud_1a3a501661406cd9a22eeeede4eb2f8484)
* [operator=](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud_1a9c050e9c72b97ec6079e06737d934895)
* [partitioningStamp](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud_1a1e32fdf88ff05b2af20659bfd94f5fc0)
* [PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud_1a1ced7091c7926176bf1cd0a0e3295056)
* [PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud_1acc45998b6b9a302675bca9b60d329d9c)
* [PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud_1a070807ab97916c768bf33b3f70fff431)
* [PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud_1a3581e641adfc3a77d6e7fb1f896a23b7)

## Public attributes

<a id="classsysc_1_1PointCloud_1ab0fa91555fbc8c62debedf8fdb9336e2"></a>
### Variable connectivityStamp

![][public]

**Definition**: `PointCloud.hpp` (line 31)

```cpp
std::int64_t sysc::PointCloud::connectivityStamp {0}
```

Connectivity stamp. Update whenever point cloud properties, other than coordinates, are updated (e.g. number of points, points order). <br/>





**Type**: std::int64_t

<a id="classsysc_1_1PointCloud_1a59b01ced48d42607a4e7e865b236e49c"></a>
### Variable coordinatesStamp

![][public]

**Definition**: `PointCloud.hpp` (line 35)

```cpp
std::int64_t sysc::PointCloud::coordinatesStamp {0}
```

Nodal coordinates stamp. Update whenever coordinates get updated.





**Type**: std::int64_t

<a id="classsysc_1_1PointCloud_1a1e32fdf88ff05b2af20659bfd94f5fc0"></a>
### Variable partitioningStamp

![][public]

**Definition**: `PointCloud.hpp` (line 39)

```cpp
std::int64_t sysc::PointCloud::partitioningStamp {0}
```

Partitioning stamp. Update whenever the point cloud is re-partitioned.





**Type**: std::int64_t

## Private attributes

<a id="classsysc_1_1PointCloud_1a29034e5e4d5516dd9fa3be286ecc98fe"></a>
### Variable m\_nodeIds

![][private]

**Definition**: `PointCloud.hpp` (line 83)

```cpp
OutputIntegerData sysc::PointCloud::m_nodeIds
```







**Type**: [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData)

<a id="classsysc_1_1PointCloud_1a99024220a781ee1500a1c6ca3dd9d608"></a>
### Variable m\_nodeCoords

![][private]

**Definition**: `PointCloud.hpp` (line 84)

```cpp
OutputVectorData sysc::PointCloud::m_nodeCoords
```







**Type**: [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData)

## Public functions

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

* [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData) **nodeIds**
* [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData) **nodeCoords**

**Return type**: 

<a id="classsysc_1_1PointCloud_1acc45998b6b9a302675bca9b60d329d9c"></a>
### Function PointCloud

![][public]

```cpp
sysc::PointCloud::PointCloud()=default
```

Provide a default constructor.





**Return type**: 

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

<a id="classsysc_1_1PointCloud_1a3a501661406cd9a22eeeede4eb2f8484"></a>
### Function operator=

![][public]

```cpp
PointCloud& sysc::PointCloud::operator=(const PointCloud &)=default
```

Provide a copy-assign operator.





**Parameters**:

* const [PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud) &

**Return type**: [PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud) &

<a id="classsysc_1_1PointCloud_1a9c050e9c72b97ec6079e06737d934895"></a>
### Function operator=

![][public]

```cpp
PointCloud& sysc::PointCloud::operator=(PointCloud &&)=default
```

Provide a move-assign operator.





**Parameters**:

* [PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud) &&

**Return type**: [PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud) &

<a id="classsysc_1_1PointCloud_1ad4a6bb5175f6fec7a5bfeaacfd2aea47"></a>
### Function getNumNodes

![][public]
![][const]

```cpp
std::size_t sysc::PointCloud::getNumNodes() const noexcept
```

Provide a method to get the number of nodes for this mesh.





**Return type**: std::size_t

<a id="classsysc_1_1PointCloud_1a5c5385f2219f3807902dd0227ba344c4"></a>
### Function getNodeIds

![][public]
![][const]

```cpp
OutputIntegerData sysc::PointCloud::getNodeIds() const
```

Provide a method to access node ids array.





**Return type**: [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData)

<a id="classsysc_1_1PointCloud_1a7af3e505ed55ed9e9ad01ffc1dbf03c0"></a>
### Function getNodeCoords

![][public]
![][const]

```cpp
OutputVectorData sysc::PointCloud::getNodeCoords() const
```

Provide a method to access node coordinates array.





**Return type**: [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData)

<a id="classsysc_1_1PointCloud_1a5624a75183bdf2f3783f135f69574872"></a>
### Function checkValidity

![][public]
![][const]

```cpp
ValidityStatus sysc::PointCloud::checkValidity() const
```

Provide a method to perform simple validity checks.





**Return type**: [ValidityStatus](structsysc_1_1ValidityStatus.md#structsysc_1_1ValidityStatus)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)