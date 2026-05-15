# Class sysc::Datashipper

![][C++]
![][public]

**Definition**: `Datashipper.hpp` (line 54)

Provide a class for the data shipper.

Data-shipping is a form of data distribution architecture where data objects are retrieved from the server, and are cached and operated upon at the client nodes. This architecture reduces network latency and increases resource utilization at the client.





The fundamental concepts here are as follows:





Server space is where the data is ordered. This data is roughly evenly distributed among processes.





Client space is where the data is arbitrarily distributed between processes.





Collection is the operation that transfers data from client space to server space.





Distribution is the operation that transfer data from server space to client space.





See System Coupling Participant library developer documentation for examples.

## Members

* [collect](classsysc_1_1Datashipper.md#classsysc_1_1Datashipper_1aed3d1382ad512733cda0eb49f666b61a)
* [collect](classsysc_1_1Datashipper.md#classsysc_1_1Datashipper_1aef0ed97bf2d663da4b15b8573d2ea29f)
* [collect](classsysc_1_1Datashipper.md#classsysc_1_1Datashipper_1a891f1b78c6aeea1f87247a002940eab6)
* [collect](classsysc_1_1Datashipper.md#classsysc_1_1Datashipper_1aa17b6550bd34589713597d93eaf85b33)
* [collect](classsysc_1_1Datashipper.md#classsysc_1_1Datashipper_1a675f157e742cab7c3a87d49bcad379ad)
* [collect](classsysc_1_1Datashipper.md#classsysc_1_1Datashipper_1a2a03e6529951c030031c4b998514d6ac)
* [collect](classsysc_1_1Datashipper.md#classsysc_1_1Datashipper_1a4da6cfa15e12b8d74cd4aebbf2a552f9)
* [collect](classsysc_1_1Datashipper.md#classsysc_1_1Datashipper_1aa2112d8ceb02e99377743842a4148c2f)
* [Datashipper](classsysc_1_1Datashipper.md#classsysc_1_1Datashipper_1ae72f71274c117b23a479f43ceb4f9692)
* [Datashipper](classsysc_1_1Datashipper.md#classsysc_1_1Datashipper_1a63d6bcef75d11650ba8f0e9b748cb1a1)
* [Datashipper](classsysc_1_1Datashipper.md#classsysc_1_1Datashipper_1a6afdb2510b609bb4c36c188fa4d88622)
* [Datashipper](classsysc_1_1Datashipper.md#classsysc_1_1Datashipper_1aee07bc98274994e0d270e2cf5de6221e)
* [distribute](classsysc_1_1Datashipper.md#classsysc_1_1Datashipper_1a882fc8535543c9035223672a8af04ccc)
* [distribute](classsysc_1_1Datashipper.md#classsysc_1_1Datashipper_1a9f5cc16cacc90c8a96338d58bb486986)
* [distribute](classsysc_1_1Datashipper.md#classsysc_1_1Datashipper_1a3299ed2693d7d65f9f5b3b7381a42f6b)
* [distribute](classsysc_1_1Datashipper.md#classsysc_1_1Datashipper_1ab7dd0c06df53facb7f20eb27458da51a)
* [distribute](classsysc_1_1Datashipper.md#classsysc_1_1Datashipper_1ae22b0d57717d354ed9791e90e95788ea)
* [distribute](classsysc_1_1Datashipper.md#classsysc_1_1Datashipper_1a6d3eeb495e03161fb6a991e83e83aea7)
* [distribute](classsysc_1_1Datashipper.md#classsysc_1_1Datashipper_1a04738ffd4fc4a0722b9fadfef3360420)
* [distribute](classsysc_1_1Datashipper.md#classsysc_1_1Datashipper_1a39e3457ea57be8a1925bda00ba529e51)
* [m\_ds](classsysc_1_1Datashipper.md#classsysc_1_1Datashipper_1a3ea1fe4d35539665d14b764a2730a06c)
* [operator=](classsysc_1_1Datashipper.md#classsysc_1_1Datashipper_1a6dbebbda4c57dfbed769474948327eb6)
* [operator=](classsysc_1_1Datashipper.md#classsysc_1_1Datashipper_1afc01ee33a345f182577aabab9b8a7692)

## Private attributes

<a id="classsysc_1_1Datashipper_1a3ea1fe4d35539665d14b764a2730a06c"></a>
### Variable m\_ds

![][private]

**Definition**: `Datashipper.hpp` (line 222)


```cpp
std::unique_ptr<DatashipperHandler, std::function<void(DatashipperHandler*)> > sysc::Datashipper::m_ds
```








**Type**: std::unique_ptr< DatashipperHandler, std::function< void(DatashipperHandler *)> >

## Public functions

<a id="classsysc_1_1Datashipper_1ae72f71274c117b23a479f43ceb4f9692"></a>
### Function Datashipper

![][public]


```cpp
sysc::Datashipper::Datashipper()=delete
```


No default constructor.





**Return type**: 

**Referenced by**:

* [Datashipper](classsysc_1_1Datashipper.md#classsysc_1_1Datashipper_1a63d6bcef75d11650ba8f0e9b748cb1a1)
* [Datashipper](classsysc_1_1Datashipper.md#classsysc_1_1Datashipper_1a6afdb2510b609bb4c36c188fa4d88622)
* [operator=](classsysc_1_1Datashipper.md#classsysc_1_1Datashipper_1a6dbebbda4c57dfbed769474948327eb6)
* [operator=](classsysc_1_1Datashipper.md#classsysc_1_1Datashipper_1afc01ee33a345f182577aabab9b8a7692)

<a id="classsysc_1_1Datashipper_1a63d6bcef75d11650ba8f0e9b748cb1a1"></a>
### Function Datashipper

![][public]


```cpp
sysc::Datashipper::Datashipper(const Datashipper &)=delete
```


No copy constructor.





**Parameters**:

* const [Datashipper](classsysc_1_1Datashipper.md#classsysc_1_1Datashipper) &

**Return type**: 

**References**:

* [Datashipper](classsysc_1_1Datashipper.md#classsysc_1_1Datashipper_1ae72f71274c117b23a479f43ceb4f9692)

<a id="classsysc_1_1Datashipper_1a6afdb2510b609bb4c36c188fa4d88622"></a>
### Function Datashipper

![][public]


```cpp
sysc::Datashipper::Datashipper(Datashipper &&)=default
```


Move constructor.





**Parameters**:

* [Datashipper](classsysc_1_1Datashipper.md#classsysc_1_1Datashipper) &&

**Return type**: 

**References**:

* [Datashipper](classsysc_1_1Datashipper.md#classsysc_1_1Datashipper_1ae72f71274c117b23a479f43ceb4f9692)

<a id="classsysc_1_1Datashipper_1a6dbebbda4c57dfbed769474948327eb6"></a>
### Function operator=

![][public]


```cpp
Datashipper & sysc::Datashipper::operator=(const Datashipper &)=delete
```


No copy assignment.





**Parameters**:

* const [Datashipper](classsysc_1_1Datashipper.md#classsysc_1_1Datashipper) &

**Return type**: [Datashipper](classsysc_1_1Datashipper.md#classsysc_1_1Datashipper) &

**References**:

* [Datashipper](classsysc_1_1Datashipper.md#classsysc_1_1Datashipper_1ae72f71274c117b23a479f43ceb4f9692)

<a id="classsysc_1_1Datashipper_1afc01ee33a345f182577aabab9b8a7692"></a>
### Function operator=

![][public]


```cpp
Datashipper & sysc::Datashipper::operator=(Datashipper &&)=default
```


Move assignment.





**Parameters**:

* [Datashipper](classsysc_1_1Datashipper.md#classsysc_1_1Datashipper) &&

**Return type**: [Datashipper](classsysc_1_1Datashipper.md#classsysc_1_1Datashipper) &

**References**:

* [Datashipper](classsysc_1_1Datashipper.md#classsysc_1_1Datashipper_1ae72f71274c117b23a479f43ceb4f9692)

<a id="classsysc_1_1Datashipper_1aee07bc98274994e0d270e2cf5de6221e"></a>
### Function Datashipper

![][public]


```cpp
sysc::Datashipper::Datashipper(std::size_t globalSize, OutputIntegerData indexMap)
```


Provide a constructor for the [DataTransfer](classsysc_1_1DataTransfer.md#classsysc_1_1DataTransfer) class.

**Parameters**:

* **globalSize**: - Global size of all elements across all ranks.
* **indexMap**: - Index map is an array, where the actual array indices are indices in the client space, and values are indices in the server space. The local size of index map is equal to the local size of client space array. For example, if indexMap[7] = 56, that means local rank has a client-space array and it has an entry in 7th (local) spot which corresponds to entry in the 56th (global) server-side array.



**Parameters**:

* std::size_t **globalSize**
* [OutputIntegerData](structsysc_1_1OutputIntegerData.md#structsysc_1_1OutputIntegerData) **indexMap**

**Return type**: 

<a id="classsysc_1_1Datashipper_1aed3d1382ad512733cda0eb49f666b61a"></a>
### Function collect

![][public]


```cpp
void sysc::Datashipper::collect(OutputIntegerData distributed, InputIntegerData collected)
```


Collect integer data.

**Parameters**:

* **distributed**: - client-space array.
* **collected**: - server-space array.



**Parameters**:

* [OutputIntegerData](structsysc_1_1OutputIntegerData.md#structsysc_1_1OutputIntegerData) **distributed**
* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData) **collected**

**Return type**: void

<a id="classsysc_1_1Datashipper_1aef0ed97bf2d663da4b15b8573d2ea29f"></a>
### Function collect

![][public]


```cpp
void sysc::Datashipper::collect(OutputIntegerData distributed, InputIntegerData collected, std::uint16_t numComponents)
```


Collect integer data.

**Parameters**:

* **distributed**: - client-space array.
* **collected**: - server-space array.
* **numComponents**: - number of components per element.



**Parameters**:

* [OutputIntegerData](structsysc_1_1OutputIntegerData.md#structsysc_1_1OutputIntegerData) **distributed**
* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData) **collected**
* std::uint16_t **numComponents**

**Return type**: void

<a id="classsysc_1_1Datashipper_1a891f1b78c6aeea1f87247a002940eab6"></a>
### Function collect

![][public]


```cpp
void sysc::Datashipper::collect(OutputScalarData distributed, InputScalarData collected)
```


Collect scalar data.

**Parameters**:

* **distributed**: - client-space array.
* **collected**: - server-space array.



**Parameters**:

* [OutputScalarData](structsysc_1_1OutputScalarData.md#structsysc_1_1OutputScalarData) **distributed**
* [InputScalarData](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData) **collected**

**Return type**: void

<a id="classsysc_1_1Datashipper_1aa17b6550bd34589713597d93eaf85b33"></a>
### Function collect

![][public]


```cpp
void sysc::Datashipper::collect(OutputVectorData distributed, InputVectorData collected)
```


Collect vector data.

**Parameters**:

* **distributed**: - client-space array.
* **collected**: - server-space array.



**Parameters**:

* [OutputVectorData](structsysc_1_1OutputVectorData.md#structsysc_1_1OutputVectorData) **distributed**
* [InputVectorData](structsysc_1_1InputVectorData.md#structsysc_1_1InputVectorData) **collected**

**Return type**: void

<a id="classsysc_1_1Datashipper_1a675f157e742cab7c3a87d49bcad379ad"></a>
### Function collect

![][public]


```cpp
void sysc::Datashipper::collect(NodeData distributed, InputNodeData collected)
```


Collect node data.

**Parameters**:

* **distributed**: - client-space array.
* **collected**: - server-space array.



**Parameters**:

* [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData) **distributed**
* [InputNodeData](structsysc_1_1InputNodeData.md#structsysc_1_1InputNodeData) **collected**

**Return type**: void

<a id="classsysc_1_1Datashipper_1a2a03e6529951c030031c4b998514d6ac"></a>
### Function collect

![][public]


```cpp
void sysc::Datashipper::collect(FaceData distributed, InputFaceData collected)
```


Collect face data.

**Parameters**:

* **distributed**: - client-space array.
* **collected**: - server-space array.



**Parameters**:

* [FaceData](structsysc_1_1FaceData.md#structsysc_1_1FaceData) **distributed**
* [InputFaceData](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData) **collected**

**Return type**: void

<a id="classsysc_1_1Datashipper_1a4da6cfa15e12b8d74cd4aebbf2a552f9"></a>
### Function collect

![][public]


```cpp
void sysc::Datashipper::collect(CellData distributed, InputCellData collected)
```


Collect cell data.

**Parameters**:

* **distributed**: - client-space array.
* **collected**: - server-space array.



**Parameters**:

* [CellData](structsysc_1_1CellData.md#structsysc_1_1CellData) **distributed**
* [InputCellData](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData) **collected**

**Return type**: void

<a id="classsysc_1_1Datashipper_1aa2112d8ceb02e99377743842a4148c2f"></a>
### Function collect

![][public]


```cpp
void sysc::Datashipper::collect(PointCloud distributed, InputPointCloud collected)
```


Collect point cloud.

**Parameters**:

* **distributed**: - client-space array.
* **collected**: - server-space array.



**Parameters**:

* [PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud) **distributed**
* [InputPointCloud](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud) **collected**

**Return type**: void

<a id="classsysc_1_1Datashipper_1a882fc8535543c9035223672a8af04ccc"></a>
### Function distribute

![][public]


```cpp
void sysc::Datashipper::distribute(OutputIntegerData collected, InputIntegerData distributed)
```


Distribute integer data.

**Parameters**:

* **collected**: - server-space array.
* **distributed**: - client-space array.



**Parameters**:

* [OutputIntegerData](structsysc_1_1OutputIntegerData.md#structsysc_1_1OutputIntegerData) **collected**
* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData) **distributed**

**Return type**: void

<a id="classsysc_1_1Datashipper_1a9f5cc16cacc90c8a96338d58bb486986"></a>
### Function distribute

![][public]


```cpp
void sysc::Datashipper::distribute(OutputIntegerData collected, InputIntegerData distributed, std::uint16_t numComponents)
```


Distribute integer data.

**Parameters**:

* **collected**: - server-space array.
* **distributed**: - client-space array.
* **numComponents**: - number of components per element.



**Parameters**:

* [OutputIntegerData](structsysc_1_1OutputIntegerData.md#structsysc_1_1OutputIntegerData) **collected**
* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData) **distributed**
* std::uint16_t **numComponents**

**Return type**: void

<a id="classsysc_1_1Datashipper_1a3299ed2693d7d65f9f5b3b7381a42f6b"></a>
### Function distribute

![][public]


```cpp
void sysc::Datashipper::distribute(OutputScalarData collected, InputScalarData distributed)
```


Distribute scalar data.

**Parameters**:

* **collected**: - server-space array.
* **distributed**: - client-space array.



**Parameters**:

* [OutputScalarData](structsysc_1_1OutputScalarData.md#structsysc_1_1OutputScalarData) **collected**
* [InputScalarData](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData) **distributed**

**Return type**: void

<a id="classsysc_1_1Datashipper_1ab7dd0c06df53facb7f20eb27458da51a"></a>
### Function distribute

![][public]


```cpp
void sysc::Datashipper::distribute(OutputVectorData collected, InputVectorData distributed)
```


Distribute vector data.

**Parameters**:

* **collected**: - server-space array.
* **distributed**: - client-space array.



**Parameters**:

* [OutputVectorData](structsysc_1_1OutputVectorData.md#structsysc_1_1OutputVectorData) **collected**
* [InputVectorData](structsysc_1_1InputVectorData.md#structsysc_1_1InputVectorData) **distributed**

**Return type**: void

<a id="classsysc_1_1Datashipper_1ae22b0d57717d354ed9791e90e95788ea"></a>
### Function distribute

![][public]


```cpp
void sysc::Datashipper::distribute(NodeData collected, InputNodeData distributed)
```


Distribute node data.

**Parameters**:

* **collected**: - server-space array.
* **distributed**: - client-space array.



**Parameters**:

* [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData) **collected**
* [InputNodeData](structsysc_1_1InputNodeData.md#structsysc_1_1InputNodeData) **distributed**

**Return type**: void

<a id="classsysc_1_1Datashipper_1a6d3eeb495e03161fb6a991e83e83aea7"></a>
### Function distribute

![][public]


```cpp
void sysc::Datashipper::distribute(FaceData collected, InputFaceData distributed)
```


Distribute face data.

**Parameters**:

* **collected**: - server-space array.
* **distributed**: - client-space array.



**Parameters**:

* [FaceData](structsysc_1_1FaceData.md#structsysc_1_1FaceData) **collected**
* [InputFaceData](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData) **distributed**

**Return type**: void

<a id="classsysc_1_1Datashipper_1a04738ffd4fc4a0722b9fadfef3360420"></a>
### Function distribute

![][public]


```cpp
void sysc::Datashipper::distribute(CellData collected, InputCellData distributed)
```


Distribute cell data.

**Parameters**:

* **collected**: - server-space array.
* **distributed**: - client-space array.



**Parameters**:

* [CellData](structsysc_1_1CellData.md#structsysc_1_1CellData) **collected**
* [InputCellData](structsysc_1_1InputCellData.md#structsysc_1_1InputCellData) **distributed**

**Return type**: void

<a id="classsysc_1_1Datashipper_1a39e3457ea57be8a1925bda00ba529e51"></a>
### Function distribute

![][public]


```cpp
void sysc::Datashipper::distribute(PointCloud collected, InputPointCloud distributed)
```


Distribute point cloud data.

**Parameters**:

* **collected**: - server-space array.
* **distributed**: - client-space array.



**Parameters**:

* [PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud) **collected**
* [InputPointCloud](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud) **distributed**

**Return type**: void

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)