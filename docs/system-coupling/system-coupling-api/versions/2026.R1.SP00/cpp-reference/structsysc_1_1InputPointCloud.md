# Structure sysc::InputPointCloud

![][C++]
![][public]

**Definition**: `PointCloud.hpp` (line 95)

Provide a point cloud access class.

Provides read-and-write access to the point cloud for a given region.

## Members

* [InputPointCloud](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud_1ae67c4139bb8d196e0f9de29baf756d55)
* [InputPointCloud](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud_1a6139af17846427589329324751f4273d)
* [InputPointCloud](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud_1abc9f138d29d16d7511152cfaf504f0bc)
* [InputPointCloud](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud_1a486bb0909187757199609c7478d5e6b1)
* [nodeCoords](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud_1a40b5c94bf58f18dd94e6ed15d98d2986)
* [nodeIds](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud_1ab59e7177cf2fe369b073649397d57f03)
* [operator=](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud_1aecd2053fec8df60f4fe63d879b83786d)
* [operator=](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud_1abe24d57a3019f736a4500eb10d996a06)

## Public attributes

<a id="structsysc_1_1InputPointCloud_1ab59e7177cf2fe369b073649397d57f03"></a>
### Variable nodeIds

![][public]

**Definition**: `PointCloud.hpp` (line 126)

```cpp
InputIntegerData sysc::InputPointCloud::nodeIds
```







**Type**: [InputIntegerData](classsysc_1_1InputIntegerData.md#classsysc_1_1InputIntegerData)

<a id="structsysc_1_1InputPointCloud_1a40b5c94bf58f18dd94e6ed15d98d2986"></a>
### Variable nodeCoords

![][public]

**Definition**: `PointCloud.hpp` (line 127)

```cpp
InputVectorData sysc::InputPointCloud::nodeCoords
```







**Type**: [InputVectorData](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData)

## Public functions

<a id="structsysc_1_1InputPointCloud_1ae67c4139bb8d196e0f9de29baf756d55"></a>
### Function InputPointCloud

![][public]

```cpp
sysc::InputPointCloud::InputPointCloud(InputIntegerData nodeIds, InputVectorData nodeCoords)
```

Constructor for [PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud) class.

**Parameters**:

* **nodeIds**: - input integer data access for node ids
* **nodeCoords**: - input vector data access for node coordinates



**Parameters**:

* [InputIntegerData](classsysc_1_1InputIntegerData.md#classsysc_1_1InputIntegerData) **nodeIds**
* [InputVectorData](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData) **nodeCoords**

**Return type**: 

<a id="structsysc_1_1InputPointCloud_1a6139af17846427589329324751f4273d"></a>
### Function InputPointCloud

![][public]

```cpp
sysc::InputPointCloud::InputPointCloud()=default
```

Provide a default constructor.





**Return type**: 

<a id="structsysc_1_1InputPointCloud_1abc9f138d29d16d7511152cfaf504f0bc"></a>
### Function InputPointCloud

![][public]

```cpp
sysc::InputPointCloud::InputPointCloud(const InputPointCloud &)=default
```

Provide a copy-constructor.





**Parameters**:

* const [InputPointCloud](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud) &

**Return type**: 

<a id="structsysc_1_1InputPointCloud_1a486bb0909187757199609c7478d5e6b1"></a>
### Function InputPointCloud

![][public]

```cpp
sysc::InputPointCloud::InputPointCloud(InputPointCloud &&)=default
```

Provide a move-constructor.





**Parameters**:

* [InputPointCloud](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud) &&

**Return type**: 

<a id="structsysc_1_1InputPointCloud_1aecd2053fec8df60f4fe63d879b83786d"></a>
### Function operator=

![][public]

```cpp
InputPointCloud& sysc::InputPointCloud::operator=(const InputPointCloud &)=default
```

Provide a copy-assign operator.





**Parameters**:

* const [InputPointCloud](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud) &

**Return type**: [InputPointCloud](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud) &

<a id="structsysc_1_1InputPointCloud_1abe24d57a3019f736a4500eb10d996a06"></a>
### Function operator=

![][public]

```cpp
InputPointCloud& sysc::InputPointCloud::operator=(InputPointCloud &&)=default
```

Provide a move-assign operator.





**Parameters**:

* [InputPointCloud](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud) &&

**Return type**: [InputPointCloud](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud) &

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)