# Structure sysc::InputFaceData

![][C++]
![][public]

**Definition**: `MeshDefinition.hpp` (line 207)

Face data access struct, provides read-only access to the mesh faces.



## Members

* [faceCellConnectivity](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData_1a0ead2f37dcec023bc3ace0be5d28a1dc)
* [faceIds](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData_1a1ff3a9c41b71bf6edf992c63bb18893d)
* [faceNodeConnectivity](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData_1af4b32a3b677563d58fdcb1689e732a0d)
* [faceNodeCounts](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData_1a171b108069b17afe2c8fd3e30f123953)
* [faceTypes](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData_1a83c61200693acf8ff6b1bc35c3585212)
* [InputFaceData](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData_1a5cedb2e70086f21ea44777869b6ae480)
* [InputFaceData](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData_1a43db4cc0734e06002d9d4ca0ead03fc1)
* [InputFaceData](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData_1ade61741330e58c2d0acdddcebf9d4267)
* [InputFaceData](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData_1a4725afb00f7e44462ae3cc625f7999a5)
* [operator=](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData_1a7680098a34f756e5a7db4a80b6259267)
* [operator=](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData_1a4201a39061a9d9cd1e1191fbc2033ecf)
* [size](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData_1a434f6239ecdb3457a79899059087288a)

## Public attributes

<a id="structsysc_1_1InputFaceData_1a1ff3a9c41b71bf6edf992c63bb18893d"></a>
### Variable faceIds

![][public]

**Definition**: `MeshDefinition.hpp` (line 209)


```cpp
InputElementIdData sysc::InputFaceData::faceIds
```


Face ids.





**Type**: [InputElementIdData](structsysc_1_1InputElementIdData.md#structsysc_1_1InputElementIdData)

**Referenced by**:

* [InputFaceData](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData_1a5cedb2e70086f21ea44777869b6ae480)
* [operator=](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData_1a4201a39061a9d9cd1e1191fbc2033ecf)

<a id="structsysc_1_1InputFaceData_1a83c61200693acf8ff6b1bc35c3585212"></a>
### Variable faceTypes

![][public]

**Definition**: `MeshDefinition.hpp` (line 212)


```cpp
InputElementTypeData sysc::InputFaceData::faceTypes
```


Face types.





**Type**: [InputElementTypeData](structsysc_1_1InputElementTypeData.md#structsysc_1_1InputElementTypeData)

**Referenced by**:

* [InputFaceData](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData_1a5cedb2e70086f21ea44777869b6ae480)
* [operator=](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData_1a4201a39061a9d9cd1e1191fbc2033ecf)

<a id="structsysc_1_1InputFaceData_1a171b108069b17afe2c8fd3e30f123953"></a>
### Variable faceNodeCounts

![][public]

**Definition**: `MeshDefinition.hpp` (line 215)


```cpp
InputElementNodeCountData sysc::InputFaceData::faceNodeCounts
```


Face node counts.





**Type**: [InputElementNodeCountData](structsysc_1_1InputElementNodeCountData.md#structsysc_1_1InputElementNodeCountData)

**Referenced by**:

* [InputFaceData](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData_1a5cedb2e70086f21ea44777869b6ae480)
* [operator=](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData_1a4201a39061a9d9cd1e1191fbc2033ecf)

<a id="structsysc_1_1InputFaceData_1af4b32a3b677563d58fdcb1689e732a0d"></a>
### Variable faceNodeConnectivity

![][public]

**Definition**: `MeshDefinition.hpp` (line 218)


```cpp
InputElementNodeConnectivityData sysc::InputFaceData::faceNodeConnectivity
```


Face-to-node connectivity.





**Type**: [InputElementNodeConnectivityData](structsysc_1_1InputElementNodeConnectivityData.md#structsysc_1_1InputElementNodeConnectivityData)

**Referenced by**:

* [InputFaceData](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData_1a5cedb2e70086f21ea44777869b6ae480)

<a id="structsysc_1_1InputFaceData_1a0ead2f37dcec023bc3ace0be5d28a1dc"></a>
### Variable faceCellConnectivity

![][public]

**Definition**: `MeshDefinition.hpp` (line 221)


```cpp
InputFaceCellConnectivityData sysc::InputFaceData::faceCellConnectivity
```


Face-to-cell connectivity.





**Type**: [InputFaceCellConnectivityData](structsysc_1_1InputFaceCellConnectivityData.md#structsysc_1_1InputFaceCellConnectivityData)

**Referenced by**:

* [InputFaceData](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData_1a5cedb2e70086f21ea44777869b6ae480)

## Public functions

<a id="structsysc_1_1InputFaceData_1a5cedb2e70086f21ea44777869b6ae480"></a>
### Function InputFaceData

![][public]


```cpp
sysc::InputFaceData::InputFaceData(InputElementIdData faceIds, InputElementTypeData faceTypes, InputElementNodeCountData faceNodeCounts, InputElementNodeConnectivityData faceNodeConnectivity, InputFaceCellConnectivityData faceCellConnectivity)
```


Face data constructor.





**Parameters**:

* [InputElementIdData](structsysc_1_1InputElementIdData.md#structsysc_1_1InputElementIdData) **faceIds**
* [InputElementTypeData](structsysc_1_1InputElementTypeData.md#structsysc_1_1InputElementTypeData) **faceTypes**
* [InputElementNodeCountData](structsysc_1_1InputElementNodeCountData.md#structsysc_1_1InputElementNodeCountData) **faceNodeCounts**
* [InputElementNodeConnectivityData](structsysc_1_1InputElementNodeConnectivityData.md#structsysc_1_1InputElementNodeConnectivityData) **faceNodeConnectivity**
* [InputFaceCellConnectivityData](structsysc_1_1InputFaceCellConnectivityData.md#structsysc_1_1InputFaceCellConnectivityData) **faceCellConnectivity**

**Return type**: 

**References**:

* [faceCellConnectivity](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData_1a0ead2f37dcec023bc3ace0be5d28a1dc)
* [faceIds](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData_1a1ff3a9c41b71bf6edf992c63bb18893d)
* [faceNodeConnectivity](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData_1af4b32a3b677563d58fdcb1689e732a0d)
* [faceNodeCounts](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData_1a171b108069b17afe2c8fd3e30f123953)
* [faceTypes](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData_1a83c61200693acf8ff6b1bc35c3585212)

**Referenced by**:

* [InputFaceData](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData_1ade61741330e58c2d0acdddcebf9d4267)
* [InputFaceData](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData_1a4725afb00f7e44462ae3cc625f7999a5)
* [operator=](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData_1a7680098a34f756e5a7db4a80b6259267)
* [operator=](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData_1a4201a39061a9d9cd1e1191fbc2033ecf)

<a id="structsysc_1_1InputFaceData_1a43db4cc0734e06002d9d4ca0ead03fc1"></a>
### Function InputFaceData

![][public]


```cpp
sysc::InputFaceData::InputFaceData()=default
```


Default constructor.





**Return type**: 

<a id="structsysc_1_1InputFaceData_1ade61741330e58c2d0acdddcebf9d4267"></a>
### Function InputFaceData

![][public]


```cpp
sysc::InputFaceData::InputFaceData(const InputFaceData &)=default
```


Copy constructor.





**Parameters**:

* const [InputFaceData](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData) &

**Return type**: 

**References**:

* [InputFaceData](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData_1a5cedb2e70086f21ea44777869b6ae480)

<a id="structsysc_1_1InputFaceData_1a4725afb00f7e44462ae3cc625f7999a5"></a>
### Function InputFaceData

![][public]


```cpp
sysc::InputFaceData::InputFaceData(InputFaceData &&)=default
```


Move constructor.





**Parameters**:

* [InputFaceData](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData) &&

**Return type**: 

**References**:

* [InputFaceData](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData_1a5cedb2e70086f21ea44777869b6ae480)

<a id="structsysc_1_1InputFaceData_1a7680098a34f756e5a7db4a80b6259267"></a>
### Function operator=

![][public]


```cpp
InputFaceData & sysc::InputFaceData::operator=(const InputFaceData &)=default
```


Copy-assign operator.





**Parameters**:

* const [InputFaceData](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData) &

**Return type**: [InputFaceData](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData) &

**References**:

* [InputFaceData](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData_1a5cedb2e70086f21ea44777869b6ae480)

<a id="structsysc_1_1InputFaceData_1a4201a39061a9d9cd1e1191fbc2033ecf"></a>
### Function operator=

![][public]


```cpp
InputFaceData & sysc::InputFaceData::operator=(InputFaceData &&)=default
```


Move-assign operator.





**Parameters**:

* [InputFaceData](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData) &&

**Return type**: [InputFaceData](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData) &

**References**:

* [faceIds](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData_1a1ff3a9c41b71bf6edf992c63bb18893d)
* [faceNodeCounts](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData_1a171b108069b17afe2c8fd3e30f123953)
* [faceTypes](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData_1a83c61200693acf8ff6b1bc35c3585212)
* [InputFaceData](structsysc_1_1InputFaceData.md#structsysc_1_1InputFaceData_1a5cedb2e70086f21ea44777869b6ae480)

<a id="structsysc_1_1InputFaceData_1a434f6239ecdb3457a79899059087288a"></a>
### Function size

![][public]
![][const]


```cpp
std::size_t sysc::InputFaceData::size() const
```








**Return type**: std::size_t

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)