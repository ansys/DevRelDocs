# Structure sysc::FaceData

![][C++]
![][public]

**Definition**: `MeshDefinition.hpp` (line 231)

Face data access struct, provides read-only access to the mesh faces.



## Members

* [faceCellConnectivity](structsysc_1_1FaceData.md#structsysc_1_1FaceData_1af34fb6e2c2337068f19700e6da494275)
* [FaceData](structsysc_1_1FaceData.md#structsysc_1_1FaceData_1a57eb407b526adfbb8ee354b4a4eb6797)
* [FaceData](structsysc_1_1FaceData.md#structsysc_1_1FaceData_1ace51d4671aacf277e1f026bce3a80891)
* [FaceData](structsysc_1_1FaceData.md#structsysc_1_1FaceData_1a7e61249cf95d3edfc5effeb9bb0b483a)
* [FaceData](structsysc_1_1FaceData.md#structsysc_1_1FaceData_1a466115894a6bc2fb1c31d0f06087d890)
* [FaceData](structsysc_1_1FaceData.md#structsysc_1_1FaceData_1a66633d1b9c3626191931cfac00c94ea4)
* [FaceData](structsysc_1_1FaceData.md#structsysc_1_1FaceData_1ad9e793b7b5852d7ab379f15a7b5728b0)
* [FaceData](structsysc_1_1FaceData.md#structsysc_1_1FaceData_1a602f2717e9a92072decb1df277c31688)
* [FaceData](structsysc_1_1FaceData.md#structsysc_1_1FaceData_1a66f522951f5e7a16979aac4445b9a8df)
* [FaceData](structsysc_1_1FaceData.md#structsysc_1_1FaceData_1a8bc787b0606f63fcbc7347f1fe391ce5)
* [FaceData](structsysc_1_1FaceData.md#structsysc_1_1FaceData_1abaacd91a253eac7827f445487be121d9)
* [FaceData](structsysc_1_1FaceData.md#structsysc_1_1FaceData_1a4637df22726ada073a6a934d7d04805a)
* [FaceData](structsysc_1_1FaceData.md#structsysc_1_1FaceData_1a3807bb4a90892d945015a89f37e3d317)
* [faceIds](structsysc_1_1FaceData.md#structsysc_1_1FaceData_1a054bb75bbf88c08c5065b5f2f20dbf12)
* [faceNodeConnectivity](structsysc_1_1FaceData.md#structsysc_1_1FaceData_1a4758c21d1ccd7b1ac07f231eb91e7540)
* [faceNodeCounts](structsysc_1_1FaceData.md#structsysc_1_1FaceData_1a8b63b98b757af684ee7d111a7e11a586)
* [faceTypes](structsysc_1_1FaceData.md#structsysc_1_1FaceData_1a791906023249db75a1b7437d7b5ca998)
* [operator=](structsysc_1_1FaceData.md#structsysc_1_1FaceData_1ac0a16bcbbdcd00ca7012bf562819f48f)
* [operator=](structsysc_1_1FaceData.md#structsysc_1_1FaceData_1a7f2d32fe35d5a190ce8cbf8eeaef3635)

## Public attributes

<a id="structsysc_1_1FaceData_1a054bb75bbf88c08c5065b5f2f20dbf12"></a>
### Variable faceIds

![][public]

**Definition**: `MeshDefinition.hpp` (line 233)

```cpp
ElementIdData sysc::FaceData::faceIds
```

Face ids.





**Type**: [ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData)

<a id="structsysc_1_1FaceData_1a791906023249db75a1b7437d7b5ca998"></a>
### Variable faceTypes

![][public]

**Definition**: `MeshDefinition.hpp` (line 236)

```cpp
ElementTypeData sysc::FaceData::faceTypes
```

Face types.





**Type**: [ElementTypeData](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData)

<a id="structsysc_1_1FaceData_1a8b63b98b757af684ee7d111a7e11a586"></a>
### Variable faceNodeCounts

![][public]

**Definition**: `MeshDefinition.hpp` (line 239)

```cpp
ElementNodeCountData sysc::FaceData::faceNodeCounts
```

Face node counts.





**Type**: [ElementNodeCountData](structsysc_1_1ElementNodeCountData.md#structsysc_1_1ElementNodeCountData)

<a id="structsysc_1_1FaceData_1a4758c21d1ccd7b1ac07f231eb91e7540"></a>
### Variable faceNodeConnectivity

![][public]

**Definition**: `MeshDefinition.hpp` (line 242)

```cpp
ElementNodeConnectivityData sysc::FaceData::faceNodeConnectivity
```

Face-to-node connectivity.





**Type**: [ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData)

<a id="structsysc_1_1FaceData_1af34fb6e2c2337068f19700e6da494275"></a>
### Variable faceCellConnectivity

![][public]

**Definition**: `MeshDefinition.hpp` (line 245)

```cpp
FaceCellConnectivityData sysc::FaceData::faceCellConnectivity
```

Face-to-cell connectivity.





**Type**: [FaceCellConnectivityData](structsysc_1_1FaceCellConnectivityData.md#structsysc_1_1FaceCellConnectivityData)

## Public functions

<a id="structsysc_1_1FaceData_1a57eb407b526adfbb8ee354b4a4eb6797"></a>
### Function FaceData

![][public]

```cpp
sysc::FaceData::FaceData(ElementIdData faceIds, ElementTypeData faceTypes, ElementNodeCountData faceNodeCounts, ElementNodeConnectivityData faceNodeConnectivity, FaceCellConnectivityData faceCellConnectivity)
```

Face data constructor.





**Parameters**:

* [ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData) **faceIds**
* [ElementTypeData](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData) **faceTypes**
* [ElementNodeCountData](structsysc_1_1ElementNodeCountData.md#structsysc_1_1ElementNodeCountData) **faceNodeCounts**
* [ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData) **faceNodeConnectivity**
* [FaceCellConnectivityData](structsysc_1_1FaceCellConnectivityData.md#structsysc_1_1FaceCellConnectivityData) **faceCellConnectivity**

**Return type**: 

<a id="structsysc_1_1FaceData_1ace51d4671aacf277e1f026bce3a80891"></a>
### Function FaceData

![][public]

```cpp
sysc::FaceData::FaceData(ElementTypeData faceTypes, ElementNodeCountData faceNodeCounts, ElementNodeConnectivityData faceNodeConnectivity, FaceCellConnectivityData faceCellConnectivity)
```

Face data constructor.





**Parameters**:

* [ElementTypeData](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData) **faceTypes**
* [ElementNodeCountData](structsysc_1_1ElementNodeCountData.md#structsysc_1_1ElementNodeCountData) **faceNodeCounts**
* [ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData) **faceNodeConnectivity**
* [FaceCellConnectivityData](structsysc_1_1FaceCellConnectivityData.md#structsysc_1_1FaceCellConnectivityData) **faceCellConnectivity**

**Return type**: 

<a id="structsysc_1_1FaceData_1a7e61249cf95d3edfc5effeb9bb0b483a"></a>
### Function FaceData

![][public]

```cpp
sysc::FaceData::FaceData(ElementIdData faceIds, ElementTypeData faceTypes, ElementNodeConnectivityData faceNodeConnectivity)
```

Face data constructor.





**Parameters**:

* [ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData) **faceIds**
* [ElementTypeData](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData) **faceTypes**
* [ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData) **faceNodeConnectivity**

**Return type**: 

<a id="structsysc_1_1FaceData_1a466115894a6bc2fb1c31d0f06087d890"></a>
### Function FaceData

![][public]

```cpp
sysc::FaceData::FaceData(ElementIdData faceIds, ElementNodeCountData faceNodeCounts, ElementNodeConnectivityData faceNodeConnectivity, FaceCellConnectivityData faceCellConnectivity)
```

Face data constructor.





**Parameters**:

* [ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData) **faceIds**
* [ElementNodeCountData](structsysc_1_1ElementNodeCountData.md#structsysc_1_1ElementNodeCountData) **faceNodeCounts**
* [ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData) **faceNodeConnectivity**
* [FaceCellConnectivityData](structsysc_1_1FaceCellConnectivityData.md#structsysc_1_1FaceCellConnectivityData) **faceCellConnectivity**

**Return type**: 

<a id="structsysc_1_1FaceData_1a66633d1b9c3626191931cfac00c94ea4"></a>
### Function FaceData

![][public]

```cpp
sysc::FaceData::FaceData(ElementIdData faceIds, ElementNodeCountData faceNodeCounts, ElementNodeConnectivityData faceNodeConnectivity)
```

Face data constructor.





**Parameters**:

* [ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData) **faceIds**
* [ElementNodeCountData](structsysc_1_1ElementNodeCountData.md#structsysc_1_1ElementNodeCountData) **faceNodeCounts**
* [ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData) **faceNodeConnectivity**

**Return type**: 

<a id="structsysc_1_1FaceData_1ad9e793b7b5852d7ab379f15a7b5728b0"></a>
### Function FaceData

![][public]

```cpp
sysc::FaceData::FaceData(ElementNodeCountData faceNodeCounts, ElementNodeConnectivityData faceNodeConnectivity)
```

Face data constructor.





**Parameters**:

* [ElementNodeCountData](structsysc_1_1ElementNodeCountData.md#structsysc_1_1ElementNodeCountData) **faceNodeCounts**
* [ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData) **faceNodeConnectivity**

**Return type**: 

<a id="structsysc_1_1FaceData_1a602f2717e9a92072decb1df277c31688"></a>
### Function FaceData

![][public]

```cpp
sysc::FaceData::FaceData(ElementTypeData faceTypes, ElementNodeConnectivityData faceNodeConnectivity)
```

Face data constructor.





**Parameters**:

* [ElementTypeData](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData) **faceTypes**
* [ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData) **faceNodeConnectivity**

**Return type**: 

<a id="structsysc_1_1FaceData_1a66f522951f5e7a16979aac4445b9a8df"></a>
### Function FaceData

![][public]

```cpp
sysc::FaceData::FaceData(ElementNodeCountData faceNodeCounts, ElementNodeConnectivityData faceNodeConnectivity, FaceCellConnectivityData faceCellConnectivity)
```

Face data constructor.





**Parameters**:

* [ElementNodeCountData](structsysc_1_1ElementNodeCountData.md#structsysc_1_1ElementNodeCountData) **faceNodeCounts**
* [ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData) **faceNodeConnectivity**
* [FaceCellConnectivityData](structsysc_1_1FaceCellConnectivityData.md#structsysc_1_1FaceCellConnectivityData) **faceCellConnectivity**

**Return type**: 

<a id="structsysc_1_1FaceData_1a8bc787b0606f63fcbc7347f1fe391ce5"></a>
### Function FaceData

![][public]

```cpp
sysc::FaceData::FaceData(ElementTypeData faceTypes, ElementNodeConnectivityData faceNodeConnectivity, FaceCellConnectivityData faceCellConnectivity)
```

Face data constructor.





**Parameters**:

* [ElementTypeData](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData) **faceTypes**
* [ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData) **faceNodeConnectivity**
* [FaceCellConnectivityData](structsysc_1_1FaceCellConnectivityData.md#structsysc_1_1FaceCellConnectivityData) **faceCellConnectivity**

**Return type**: 

<a id="structsysc_1_1FaceData_1abaacd91a253eac7827f445487be121d9"></a>
### Function FaceData

![][public]

```cpp
sysc::FaceData::FaceData()=default
```

Default constructor.





**Return type**: 

<a id="structsysc_1_1FaceData_1a4637df22726ada073a6a934d7d04805a"></a>
### Function FaceData

![][public]

```cpp
sysc::FaceData::FaceData(const FaceData &)=default
```

Copy constructor.





**Parameters**:

* const [FaceData](structsysc_1_1FaceData.md#structsysc_1_1FaceData) &

**Return type**: 

<a id="structsysc_1_1FaceData_1a3807bb4a90892d945015a89f37e3d317"></a>
### Function FaceData

![][public]

```cpp
sysc::FaceData::FaceData(FaceData &&)=default
```

Move constructor.





**Parameters**:

* [FaceData](structsysc_1_1FaceData.md#structsysc_1_1FaceData) &&

**Return type**: 

<a id="structsysc_1_1FaceData_1ac0a16bcbbdcd00ca7012bf562819f48f"></a>
### Function operator=

![][public]

```cpp
FaceData& sysc::FaceData::operator=(const FaceData &)=default
```

Copy-assign operator.





**Parameters**:

* const [FaceData](structsysc_1_1FaceData.md#structsysc_1_1FaceData) &

**Return type**: [FaceData](structsysc_1_1FaceData.md#structsysc_1_1FaceData) &

<a id="structsysc_1_1FaceData_1a7f2d32fe35d5a190ce8cbf8eeaef3635"></a>
### Function operator=

![][public]

```cpp
FaceData& sysc::FaceData::operator=(FaceData &&)=default
```

Move-assign operator.





**Parameters**:

* [FaceData](structsysc_1_1FaceData.md#structsysc_1_1FaceData) &&

**Return type**: [FaceData](structsysc_1_1FaceData.md#structsysc_1_1FaceData) &

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)