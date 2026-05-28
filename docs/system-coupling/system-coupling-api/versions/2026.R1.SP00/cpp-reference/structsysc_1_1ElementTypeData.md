---
title: "Structure sysc::ElementTypeData"
---

![][C++]
![][public]

**Definition**: `MeshDefinition.hpp` (line 55)

Element types access struct, provides read-only access to the mesh element types.



## Members

* [ElementTypeData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementTypeData)
* [ElementTypeData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementTypeData)
* [ElementTypeData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementTypeData)
* [ElementTypeData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementTypeData)
* [elementTypes](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementTypeData)
* [operator=](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementTypeData)
* [operator=](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementTypeData)

## Public attributes

<a id="structsysc_1_1ElementTypeData_1a7f626af81dbf262bebcc32582b8e1b08"></a>
### Variable elementTypes

![][public]

**Definition**: `MeshDefinition.hpp` (line 57)

```cpp
OutputIntegerData sysc::ElementTypeData::elementTypes
```

Element types array access.





**Type**: [OutputIntegerData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1OutputIntegerData)

## Public functions

<a id="structsysc_1_1ElementTypeData_1a0587e655031ee7e47a65c0e93a6fb616"></a>
### Function ElementTypeData

![][public]

```cpp
sysc::ElementTypeData::ElementTypeData(OutputIntegerData elementTypes)
```

Constructor that takes element types.





**Parameters**:

* [OutputIntegerData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1OutputIntegerData) **elementTypes**

**Return type**: 

<a id="structsysc_1_1ElementTypeData_1ab51a5e9174c8b5d81047868e9a6e58bc"></a>
### Function ElementTypeData

![][public]

```cpp
sysc::ElementTypeData::ElementTypeData()=default
```

Default constructor.





**Return type**: 

<a id="structsysc_1_1ElementTypeData_1af9ed3a9f4cc9786394ec494decf23126"></a>
### Function ElementTypeData

![][public]

```cpp
sysc::ElementTypeData::ElementTypeData(const ElementTypeData &)=default
```

Copy constructor.





**Parameters**:

* const [ElementTypeData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementTypeData) &

**Return type**: 

<a id="structsysc_1_1ElementTypeData_1a28778cc3be9c38556f7a7f5c9c2916b5"></a>
### Function ElementTypeData

![][public]

```cpp
sysc::ElementTypeData::ElementTypeData(ElementTypeData &&)=default
```

Move constructor.





**Parameters**:

* [ElementTypeData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementTypeData) &&

**Return type**: 

<a id="structsysc_1_1ElementTypeData_1a962fd0d1b2cf1f5e7077e90fc6510c03"></a>
### Function operator=

![][public]

```cpp
ElementTypeData& sysc::ElementTypeData::operator=(const ElementTypeData &)=default
```

Copy-assign operator.





**Parameters**:

* const [ElementTypeData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementTypeData) &

**Return type**: [ElementTypeData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementTypeData) &

<a id="structsysc_1_1ElementTypeData_1aefc002942e6c81f7cfb72ab0940c3a1c"></a>
### Function operator=

![][public]

```cpp
ElementTypeData& sysc::ElementTypeData::operator=(ElementTypeData &&)=default
```

Move-assign operator.





**Parameters**:

* [ElementTypeData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementTypeData) &&

**Return type**: [ElementTypeData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementTypeData) &

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)