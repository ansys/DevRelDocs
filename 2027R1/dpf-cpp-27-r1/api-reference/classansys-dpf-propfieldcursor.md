# Class ansys::dpf::PropFieldCursor

<a id="classansys-dpf-propfieldcursor"></a>

![][C++]
![][public]



Represents complete property data(id, size, num elementary data)

## Members

* [data](classansys-dpf-propfieldcursor.md#classansys-dpf-propfieldcursor-1afb9be4ae3088090d4caf097455fe877f)
* [defined](classansys-dpf-propfieldcursor.md#classansys-dpf-propfieldcursor-1a21c28026e67c8724b6610f545647f289)
* [id](classansys-dpf-propfieldcursor.md#classansys-dpf-propfieldcursor-1ae4525edd503db4d6a9892428facc2f92)
* [numberOfComponents](classansys-dpf-propfieldcursor.md#classansys-dpf-propfieldcursor-1a8647f34e38981812b3a6c37b0d859567)
* [numberOfElementaryData](classansys-dpf-propfieldcursor.md#classansys-dpf-propfieldcursor-1aba47f2547a400007ff5140bb23addaf6)
* [operator[]](classansys-dpf-propfieldcursor.md#classansys-dpf-propfieldcursor-1ac90d986242e37c0ff902cfb88fbf62b8)
* [size](classansys-dpf-propfieldcursor.md#classansys-dpf-propfieldcursor-1a269c1fad1eab6210e2f0e271bd0a1b34)

## Friends

<a id="classansys-dpf-propfieldcursor-1abb4aa5a7ed62b741f0b146a257d0fe5e"></a>
### Friend PropertyField

![][C++]
![][public]







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class PropertyField"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropFieldCursor::PropertyField"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"PropertyField"}]},{"type":"text","text":"\n        "}]}`
-->

## Public functions

<a id="classansys-dpf-propfieldcursor-1afb9be4ae3088090d4caf097455fe877f"></a>
### Function data

![][public]
![][const]


```cpp
dp_int * ansys::dpf::PropFieldCursor::data() const
```




**Returns**:

Pointer to property data.



**Return type**: [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropFieldCursor::data"}]}`
-->

<a id="classansys-dpf-propfieldcursor-1ac90d986242e37c0ff902cfb88fbf62b8"></a>
### Function operator[]

![][public]
![][const]


```cpp
dp_int & ansys::dpf::PropFieldCursor::operator[](dp_int index) const
```




**Returns**:

Property data at given index.



**Parameters**:

* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **index**: [in] Index of data within [PropertyField](classansys-dpf-propertyfield.md#classansys-dpf-propertyfield).

**Return type**: [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropFieldCursor::operator[]"}]}`
-->

<a id="classansys-dpf-propfieldcursor-1a269c1fad1eab6210e2f0e271bd0a1b34"></a>
### Function size

![][public]
![][const]


```cpp
dp_int ansys::dpf::PropFieldCursor::size() const
```




**Returns**:

Size of property data.



**Return type**: [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropFieldCursor::size"}]}`
-->

<a id="classansys-dpf-propfieldcursor-1ae4525edd503db4d6a9892428facc2f92"></a>
### Function id

![][public]
![][const]


```cpp
dp_id ansys::dpf::PropFieldCursor::id() const
```




**Returns**:

Id of property.



**Return type**: [dp\_id](namespaceansys-dpf.md#namespaceansys-dpf-1ab4574c9af3f2bb8011da7d1f4c8da20e)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropFieldCursor::id"}]}`
-->

<a id="classansys-dpf-propfieldcursor-1a8647f34e38981812b3a6c37b0d859567"></a>
### Function numberOfComponents

![][public]
![][const]


```cpp
dp_int ansys::dpf::PropFieldCursor::numberOfComponents() const
```




**Returns**:

Number of components in property data.



**Return type**: [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropFieldCursor::numberOfComponents"}]}`
-->

<a id="classansys-dpf-propfieldcursor-1aba47f2547a400007ff5140bb23addaf6"></a>
### Function numberOfElementaryData

![][public]
![][const]


```cpp
dp_int ansys::dpf::PropFieldCursor::numberOfElementaryData() const
```




**Returns**:

Number of entries in property data.



**Return type**: [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropFieldCursor::numberOfElementaryData"}]}`
-->

<a id="classansys-dpf-propfieldcursor-1a21c28026e67c8724b6610f545647f289"></a>
### Function defined

![][public]
![][const]


```cpp
bool ansys::dpf::PropFieldCursor::defined() const
```




**Returns**:

Indication that property defined



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropFieldCursor::defined"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)