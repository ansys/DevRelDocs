<a id="classansys_1_1dpf_1_1FieldCursor"></a>
# Class ansys::dpf::FieldCursor

![][C++]
![][public]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 2037)

Represents a complete entity data (id, size, num elementary data).

## Members

* [\_data](classansys_1_1dpf_1_1FieldCursor.md#classansys_1_1dpf_1_1FieldCursor_1aea0fe882674b94950ce104aa65c7a7ec)
* [\_data\_first\_index](classansys_1_1dpf_1_1FieldCursor.md#classansys_1_1dpf_1_1FieldCursor_1a5f6077c01da1f21f7193ffaab7217bfb)
* [\_defined](classansys_1_1dpf_1_1FieldCursor.md#classansys_1_1dpf_1_1FieldCursor_1a45eca4339163b3a97391da9b4854bcf6)
* [\_id](classansys_1_1dpf_1_1FieldCursor.md#classansys_1_1dpf_1_1FieldCursor_1a37999a596fa6170cf8fa068f0a6d29aa)
* [\_n\_component](classansys_1_1dpf_1_1FieldCursor.md#classansys_1_1dpf_1_1FieldCursor_1ab778a05a361083202cc327d60e8589cd)
* [\_n\_elementary\_data](classansys_1_1dpf_1_1FieldCursor.md#classansys_1_1dpf_1_1FieldCursor_1a8f0921ea1513603de806e6485a76d477)
* [\_size](classansys_1_1dpf_1_1FieldCursor.md#classansys_1_1dpf_1_1FieldCursor_1ab6005502c13bb9f246991b0f62b370c1)
* [data](classansys_1_1dpf_1_1FieldCursor.md#classansys_1_1dpf_1_1FieldCursor_1a815f0d760f113116cb5ed55b9ec9f584)
* [data\_first\_index](classansys_1_1dpf_1_1FieldCursor.md#classansys_1_1dpf_1_1FieldCursor_1aac74361ccc8826b47e26aff3215038a7)
* [defined](classansys_1_1dpf_1_1FieldCursor.md#classansys_1_1dpf_1_1FieldCursor_1afb033c6e098f2aebf9b8c6da12608891)
* [id](classansys_1_1dpf_1_1FieldCursor.md#classansys_1_1dpf_1_1FieldCursor_1a4a87616f5f17ac420f0499170efcf454)
* [n\_component](classansys_1_1dpf_1_1FieldCursor.md#classansys_1_1dpf_1_1FieldCursor_1a907fd15815ec3ffbd89cdc3a5b2ba5ca)
* [n\_elementary\_data](classansys_1_1dpf_1_1FieldCursor.md#classansys_1_1dpf_1_1FieldCursor_1a546e38c5c0b76a50350946e11718a9d3)
* [operator[]](classansys_1_1dpf_1_1FieldCursor.md#classansys_1_1dpf_1_1FieldCursor_1a00beb09a53d6fd59dcd80dd21f698895)
* [size](classansys_1_1dpf_1_1FieldCursor.md#classansys_1_1dpf_1_1FieldCursor_1a088f17f2b7eec6cd4470ece35f0dc01a)

## Friends

## Public functions

<a id="classansys_1_1dpf_1_1FieldCursor_1a815f0d760f113116cb5ed55b9ec9f584"></a>
### Function data

![][public]
![][const]

```cpp
dp_double * ansys::dpf::FieldCursor::data() const
```

**Returns**:

Pointer to field data.

**Return type**: [dp\_double](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1acb480013bfed185b5e34a0bdcb0e3790) *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldCursor::data"}]}`
-->

<a id="classansys_1_1dpf_1_1FieldCursor_1a00beb09a53d6fd59dcd80dd21f698895"></a>
### Function operator[]

![][public]
![][const]

```cpp
dp_double & ansys::dpf::FieldCursor::operator[](dp_int index) const
```

**Returns**:

[Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) data at given index.

**Parameters**:

* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **index**: [in] Index of data within field.

**Return type**: [dp\_double](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1acb480013bfed185b5e34a0bdcb0e3790) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldCursor::operator[]"}]}`
-->

<a id="classansys_1_1dpf_1_1FieldCursor_1a088f17f2b7eec6cd4470ece35f0dc01a"></a>
### Function size

![][public]
![][const]

```cpp
dp_int ansys::dpf::FieldCursor::size() const
```

**Returns**:

Size of field data.

**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldCursor::size"}]}`
-->

<a id="classansys_1_1dpf_1_1FieldCursor_1a4a87616f5f17ac420f0499170efcf454"></a>
### Function id

![][public]
![][const]

```cpp
dp_id ansys::dpf::FieldCursor::id() const
```

**Returns**:

Id of field.

**Return type**: [dp\_id](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ab4574c9af3f2bb8011da7d1f4c8da20e)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldCursor::id"}]}`
-->

<a id="classansys_1_1dpf_1_1FieldCursor_1a907fd15815ec3ffbd89cdc3a5b2ba5ca"></a>
### Function n\_component

![][public]
![][const]

```cpp
dp_int ansys::dpf::FieldCursor::n_component() const
```

**Returns**:

Number of components in field data.

**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldCursor::n_component"}]}`
-->

<a id="classansys_1_1dpf_1_1FieldCursor_1a546e38c5c0b76a50350946e11718a9d3"></a>
### Function n\_elementary\_data

![][public]
![][const]

```cpp
dp_int ansys::dpf::FieldCursor::n_elementary_data() const
```

**Returns**:

Number of entries in field data.

**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldCursor::n_elementary_data"}]}`
-->

<a id="classansys_1_1dpf_1_1FieldCursor_1aac74361ccc8826b47e26aff3215038a7"></a>
### Function data\_first\_index

![][public]
![][const]

```cpp
dp_int ansys::dpf::FieldCursor::data_first_index() const
```

**Returns**:

Index of first entry in field data.

**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldCursor::data_first_index"}]}`
-->

<a id="classansys_1_1dpf_1_1FieldCursor_1afb033c6e098f2aebf9b8c6da12608891"></a>
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
[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)