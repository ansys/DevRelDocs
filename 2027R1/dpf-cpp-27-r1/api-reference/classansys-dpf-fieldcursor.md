# Class ansys::dpf::FieldCursor

<a id="classansys-dpf-fieldcursor"></a>

![][C++]
![][public]



Represents a complete entity data (id, size, num elementary data).

## Members

* [data](classansys-dpf-fieldcursor.md#classansys-dpf-fieldcursor-1a815f0d760f113116cb5ed55b9ec9f584)
* [data\_first\_index](classansys-dpf-fieldcursor.md#classansys-dpf-fieldcursor-1aac74361ccc8826b47e26aff3215038a7)
* [defined](classansys-dpf-fieldcursor.md#classansys-dpf-fieldcursor-1afb033c6e098f2aebf9b8c6da12608891)
* [id](classansys-dpf-fieldcursor.md#classansys-dpf-fieldcursor-1a4a87616f5f17ac420f0499170efcf454)
* [n\_component](classansys-dpf-fieldcursor.md#classansys-dpf-fieldcursor-1a907fd15815ec3ffbd89cdc3a5b2ba5ca)
* [n\_elementary\_data](classansys-dpf-fieldcursor.md#classansys-dpf-fieldcursor-1a546e38c5c0b76a50350946e11718a9d3)
* [operator[]](classansys-dpf-fieldcursor.md#classansys-dpf-fieldcursor-1a00beb09a53d6fd59dcd80dd21f698895)
* [size](classansys-dpf-fieldcursor.md#classansys-dpf-fieldcursor-1a088f17f2b7eec6cd4470ece35f0dc01a)

## Friends

<a id="classansys-dpf-fieldcursor-1aaec47a26a3c11c1debd3ed922b69cbd2"></a>
### Friend Field

![][C++]
![][public]







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Field"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldCursor::Field"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"Field"}]},{"type":"text","text":"\n        "}]}`
-->

## Public functions

<a id="classansys-dpf-fieldcursor-1a815f0d760f113116cb5ed55b9ec9f584"></a>
### Function data

![][public]
![][const]


```cpp
dp_double * ansys::dpf::FieldCursor::data() const
```




**Returns**:

Pointer to field data.



**Return type**: [dp\_double](namespaceansys-dpf.md#namespaceansys-dpf-1acb480013bfed185b5e34a0bdcb0e3790) *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldCursor::data"}]}`
-->

<a id="classansys-dpf-fieldcursor-1a00beb09a53d6fd59dcd80dd21f698895"></a>
### Function operator[]

![][public]
![][const]


```cpp
dp_double & ansys::dpf::FieldCursor::operator[](dp_int index) const
```




**Returns**:

[Field](classansys-dpf-field.md#classansys-dpf-field) data at given index.



**Parameters**:

* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **index**: [in] Index of data within field.

**Return type**: [dp\_double](namespaceansys-dpf.md#namespaceansys-dpf-1acb480013bfed185b5e34a0bdcb0e3790) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldCursor::operator[]"}]}`
-->

<a id="classansys-dpf-fieldcursor-1a088f17f2b7eec6cd4470ece35f0dc01a"></a>
### Function size

![][public]
![][const]


```cpp
dp_int ansys::dpf::FieldCursor::size() const
```




**Returns**:

Size of field data.



**Return type**: [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldCursor::size"}]}`
-->

<a id="classansys-dpf-fieldcursor-1a4a87616f5f17ac420f0499170efcf454"></a>
### Function id

![][public]
![][const]


```cpp
dp_id ansys::dpf::FieldCursor::id() const
```




**Returns**:

Id of field.



**Return type**: [dp\_id](namespaceansys-dpf.md#namespaceansys-dpf-1ab4574c9af3f2bb8011da7d1f4c8da20e)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldCursor::id"}]}`
-->

<a id="classansys-dpf-fieldcursor-1a907fd15815ec3ffbd89cdc3a5b2ba5ca"></a>
### Function n\_component

![][public]
![][const]


```cpp
dp_int ansys::dpf::FieldCursor::n_component() const
```




**Returns**:

Number of components in field data.



**Return type**: [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldCursor::n_component"}]}`
-->

<a id="classansys-dpf-fieldcursor-1a546e38c5c0b76a50350946e11718a9d3"></a>
### Function n\_elementary\_data

![][public]
![][const]


```cpp
dp_int ansys::dpf::FieldCursor::n_elementary_data() const
```




**Returns**:

Number of entries in field data.



**Return type**: [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldCursor::n_elementary_data"}]}`
-->

<a id="classansys-dpf-fieldcursor-1aac74361ccc8826b47e26aff3215038a7"></a>
### Function data\_first\_index

![][public]
![][const]


```cpp
dp_int ansys::dpf::FieldCursor::data_first_index() const
```




**Returns**:

Index of first entry in field data.



**Return type**: [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldCursor::data_first_index"}]}`
-->

<a id="classansys-dpf-fieldcursor-1afb033c6e098f2aebf9b8c6da12608891"></a>
### Function defined

![][public]
![][const]


```cpp
bool ansys::dpf::FieldCursor::defined() const
```




**Returns**:

Indication that field defined



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldCursor::defined"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)