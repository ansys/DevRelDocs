# Structure sysc::ElementIdData

![][C++]
![][public]

**Definition**: `MeshDefinition.hpp` (line 24)

Element id access struct, provides read-only access to the mesh element ids.



## Members

* [ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData_1a2bc3e191dedac4234791ebe8d2726efc)
* [ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData_1ad58ae6d869976ba9e7a110d49b6a47a2)
* [ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData_1a39cc1f753def252933c52a6b73b72785)
* [ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData_1a2d4efcc91449a330e8ce7e5ad14ca309)
* [elementIds](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData_1ac98082ccca6778003a7785e4033fdcf7)
* [operator=](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData_1a99704232b3630f88fa5a4f636f543f13)
* [operator=](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData_1aac7e9e57ec1b24173a5cb3f5d67506ff)

## Public attributes

<a id="structsysc_1_1ElementIdData_1ac98082ccca6778003a7785e4033fdcf7"></a>
### Variable elementIds

![][public]

**Definition**: `MeshDefinition.hpp` (line 26)

```cpp
OutputIntegerData sysc::ElementIdData::elementIds
```

Element ids.





**Type**: [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData)

## Public functions

<a id="structsysc_1_1ElementIdData_1a2bc3e191dedac4234791ebe8d2726efc"></a>
### Function ElementIdData

![][public]

```cpp
sysc::ElementIdData::ElementIdData(OutputIntegerData elementIds)
```

Constructor that takes cell ids.





**Parameters**:

* [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData) **elementIds**

**Return type**: 

<a id="structsysc_1_1ElementIdData_1ad58ae6d869976ba9e7a110d49b6a47a2"></a>
### Function ElementIdData

![][public]

```cpp
sysc::ElementIdData::ElementIdData()=default
```

Default constructor.





**Return type**: 

<a id="structsysc_1_1ElementIdData_1a39cc1f753def252933c52a6b73b72785"></a>
### Function ElementIdData

![][public]

```cpp
sysc::ElementIdData::ElementIdData(const ElementIdData &)=default
```

Copy constructor.





**Parameters**:

* const [ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData) &

**Return type**: 

<a id="structsysc_1_1ElementIdData_1a2d4efcc91449a330e8ce7e5ad14ca309"></a>
### Function ElementIdData

![][public]

```cpp
sysc::ElementIdData::ElementIdData(ElementIdData &&)=default
```

Move constructor.





**Parameters**:

* [ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData) &&

**Return type**: 

<a id="structsysc_1_1ElementIdData_1a99704232b3630f88fa5a4f636f543f13"></a>
### Function operator=

![][public]

```cpp
ElementIdData& sysc::ElementIdData::operator=(const ElementIdData &)=default
```

Copy-assign operator.





**Parameters**:

* const [ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData) &

**Return type**: [ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData) &

<a id="structsysc_1_1ElementIdData_1aac7e9e57ec1b24173a5cb3f5d67506ff"></a>
### Function operator=

![][public]

```cpp
ElementIdData& sysc::ElementIdData::operator=(ElementIdData &&)=default
```

Move-assign operator.





**Parameters**:

* [ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData) &&

**Return type**: [ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData) &

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)