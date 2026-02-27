# Structure sysc::InputPointCloud

![][C++]
![][public]

**Definition**: `PointCloud.hpp` (line 27)

Provide a point cloud access class.

Provides read-and-write access to the point cloud for a given region.

## Members

* [getNumNodes](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud_1a10e576c3b610e164f53ba1427a7beb74)
* [InputPointCloud](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud_1ae67c4139bb8d196e0f9de29baf756d55)
* [InputPointCloud](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud_1a6139af17846427589329324751f4273d)
* [InputPointCloud](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud_1abc9f138d29d16d7511152cfaf504f0bc)
* [InputPointCloud](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud_1a486bb0909187757199609c7478d5e6b1)
* [nodeCoords](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud_1a40b5c94bf58f18dd94e6ed15d98d2986)
* [nodeIds](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud_1ab59e7177cf2fe369b073649397d57f03)
* [operator=](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud_1a89881fedd53b9d6aa852811fea2a4d43)
* [operator=](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud_1a2edd6fad6368babb13fb54277c397ce1)
* [size](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud_1a790e3f8d7ac6f8057ed909bd9cda5bec)

## Public attributes

<a id="structsysc_1_1InputPointCloud_1ab59e7177cf2fe369b073649397d57f03"></a>
### Variable nodeIds

![][public]

**Definition**: `PointCloud.hpp` (line 70)


```cpp
InputIntegerData sysc::InputPointCloud::nodeIds
```








**Type**: [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData)

<a id="structsysc_1_1InputPointCloud_1a40b5c94bf58f18dd94e6ed15d98d2986"></a>
### Variable nodeCoords

![][public]

**Definition**: `PointCloud.hpp` (line 71)


```cpp
InputVectorData sysc::InputPointCloud::nodeCoords
```








**Type**: [InputVectorData](structsysc_1_1InputVectorData.md#structsysc_1_1InputVectorData)

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

* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData) **nodeIds**
* [InputVectorData](structsysc_1_1InputVectorData.md#structsysc_1_1InputVectorData) **nodeCoords**

**Return type**: 

**Referenced by**:

* [InputPointCloud](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud_1abc9f138d29d16d7511152cfaf504f0bc)
* [InputPointCloud](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud_1a486bb0909187757199609c7478d5e6b1)
* [operator=](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud_1a89881fedd53b9d6aa852811fea2a4d43)
* [operator=](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud_1a2edd6fad6368babb13fb54277c397ce1)

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

**References**:

* [InputPointCloud](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud_1ae67c4139bb8d196e0f9de29baf756d55)

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

**References**:

* [InputPointCloud](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud_1ae67c4139bb8d196e0f9de29baf756d55)

<a id="structsysc_1_1InputPointCloud_1a89881fedd53b9d6aa852811fea2a4d43"></a>
### Function operator=

![][public]


```cpp
InputPointCloud & sysc::InputPointCloud::operator=(const InputPointCloud &)=default
```


Provide a copy-assign operator.





**Parameters**:

* const [InputPointCloud](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud) &

**Return type**: [InputPointCloud](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud) &

**References**:

* [InputPointCloud](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud_1ae67c4139bb8d196e0f9de29baf756d55)

<a id="structsysc_1_1InputPointCloud_1a2edd6fad6368babb13fb54277c397ce1"></a>
### Function operator=

![][public]


```cpp
InputPointCloud & sysc::InputPointCloud::operator=(InputPointCloud &&)=default
```


Provide a move-assign operator.





**Parameters**:

* [InputPointCloud](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud) &&

**Return type**: [InputPointCloud](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud) &

**References**:

* [InputPointCloud](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud_1ae67c4139bb8d196e0f9de29baf756d55)

<a id="structsysc_1_1InputPointCloud_1a10e576c3b610e164f53ba1427a7beb74"></a>
### Function getNumNodes

![][public]
![][const]


```cpp
std::size_t sysc::InputPointCloud::getNumNodes() const noexcept
```


Provide a method to get the number of nodes for this mesh.





**Return type**: std::size_t

**Referenced by**:

* [size](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud_1a790e3f8d7ac6f8057ed909bd9cda5bec)

<a id="structsysc_1_1InputPointCloud_1a790e3f8d7ac6f8057ed909bd9cda5bec"></a>
### Function size

![][public]
![][const]


```cpp
std::size_t sysc::InputPointCloud::size() const noexcept
```


Provide a method to get the number of nodes for this mesh.





**Return type**: std::size_t

**References**:

* [getNumNodes](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud_1a10e576c3b610e164f53ba1427a7beb74)

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)