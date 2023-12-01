<a id="classansys_1_1dpf_1_1FieldCursor"></a>
# Class ansys::dpf::FieldCursor

![][C++]
![][public]

**Definition**: `dpf\_api.h` (line 843)



Represents a complete entity data (id, size, num elementary data).

## Members

* [\_data](classansys_1_1dpf_1_1FieldCursor.md#classansys_1_1dpf_1_1FieldCursor_1aea0fe882674b94950ce104aa65c7a7ec)
* [\_data\_first\_index](classansys_1_1dpf_1_1FieldCursor.md#classansys_1_1dpf_1_1FieldCursor_1a5f6077c01da1f21f7193ffaab7217bfb)
* [\_defined](classansys_1_1dpf_1_1FieldCursor.md#classansys_1_1dpf_1_1FieldCursor_1a45eca4339163b3a97391da9b4854bcf6)
* [\_id](classansys_1_1dpf_1_1FieldCursor.md#classansys_1_1dpf_1_1FieldCursor_1a37999a596fa6170cf8fa068f0a6d29aa)
* [\_n\_component](classansys_1_1dpf_1_1FieldCursor.md#classansys_1_1dpf_1_1FieldCursor_1ab778a05a361083202cc327d60e8589cd)
* [\_n\_elementary\_data](classansys_1_1dpf_1_1FieldCursor.md#classansys_1_1dpf_1_1FieldCursor_1a8f0921ea1513603de806e6485a76d477)
* [\_size](classansys_1_1dpf_1_1FieldCursor.md#classansys_1_1dpf_1_1FieldCursor_1ab6005502c13bb9f246991b0f62b370c1)
* [data](classansys_1_1dpf_1_1FieldCursor.md#classansys_1_1dpf_1_1FieldCursor_1ad92fd0188103f49f08d674443db42c37)
* [data\_first\_index](classansys_1_1dpf_1_1FieldCursor.md#classansys_1_1dpf_1_1FieldCursor_1aac74361ccc8826b47e26aff3215038a7)
* [defined](classansys_1_1dpf_1_1FieldCursor.md#classansys_1_1dpf_1_1FieldCursor_1afb033c6e098f2aebf9b8c6da12608891)
* [id](classansys_1_1dpf_1_1FieldCursor.md#classansys_1_1dpf_1_1FieldCursor_1a4a87616f5f17ac420f0499170efcf454)
* [n\_component](classansys_1_1dpf_1_1FieldCursor.md#classansys_1_1dpf_1_1FieldCursor_1a907fd15815ec3ffbd89cdc3a5b2ba5ca)
* [n\_elementary\_data](classansys_1_1dpf_1_1FieldCursor.md#classansys_1_1dpf_1_1FieldCursor_1a546e38c5c0b76a50350946e11718a9d3)
* [operator[]](classansys_1_1dpf_1_1FieldCursor.md#classansys_1_1dpf_1_1FieldCursor_1a2b9f7981fa3bb19a0a1a0ca13a7f737f)
* [size](classansys_1_1dpf_1_1FieldCursor.md#classansys_1_1dpf_1_1FieldCursor_1a088f17f2b7eec6cd4470ece35f0dc01a)

## Friends

<a id="classansys_1_1dpf_1_1FieldCursor_1aaec47a26a3c11c1debd3ed922b69cbd2"></a>
### Friend Field

![][C++]
![][public]

**Definition**: `dpf\_api.h` (line 846)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Field"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classansys_1_1dpf_1_1Field"},"children":[{"type":"text","text":"Field"}]}]},{"type":"text","text":"\n        "}]}

## Private attributes

<a id="classansys_1_1dpf_1_1FieldCursor_1aea0fe882674b94950ce104aa65c7a7ec"></a>
### Variable \_data

![][private]

**Definition**: `dpf\_api.h` (line 849)

```cpp
dp_double* ansys::dpf::FieldCursor::_data
```







**Type**: [dp\_double](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1acb480013bfed185b5e34a0bdcb0e3790) *

<a id="classansys_1_1dpf_1_1FieldCursor_1ab6005502c13bb9f246991b0f62b370c1"></a>
### Variable \_size

![][private]

**Definition**: `dpf\_api.h` (line 850)

```cpp
dp_int ansys::dpf::FieldCursor::_size
```







**Type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<a id="classansys_1_1dpf_1_1FieldCursor_1a37999a596fa6170cf8fa068f0a6d29aa"></a>
### Variable \_id

![][private]

**Definition**: `dpf\_api.h` (line 851)

```cpp
dp_id ansys::dpf::FieldCursor::_id
```







**Type**: [dp\_id](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ab4574c9af3f2bb8011da7d1f4c8da20e)

<a id="classansys_1_1dpf_1_1FieldCursor_1ab778a05a361083202cc327d60e8589cd"></a>
### Variable \_n\_component

![][private]

**Definition**: `dpf\_api.h` (line 852)

```cpp
dp_int ansys::dpf::FieldCursor::_n_component
```







**Type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<a id="classansys_1_1dpf_1_1FieldCursor_1a8f0921ea1513603de806e6485a76d477"></a>
### Variable \_n\_elementary\_data

![][private]

**Definition**: `dpf\_api.h` (line 853)

```cpp
dp_int ansys::dpf::FieldCursor::_n_elementary_data
```







**Type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<a id="classansys_1_1dpf_1_1FieldCursor_1a5f6077c01da1f21f7193ffaab7217bfb"></a>
### Variable \_data\_first\_index

![][private]

**Definition**: `dpf\_api.h` (line 854)

```cpp
dp_int ansys::dpf::FieldCursor::_data_first_index
```







**Type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<a id="classansys_1_1dpf_1_1FieldCursor_1a45eca4339163b3a97391da9b4854bcf6"></a>
### Variable \_defined

![][private]

**Definition**: `dpf\_api.h` (line 855)

```cpp
bool ansys::dpf::FieldCursor::_defined
```







**Type**: bool

## Public functions

<a id="classansys_1_1dpf_1_1FieldCursor_1ad92fd0188103f49f08d674443db42c37"></a>
### Function data

![][public]
![][const]

```cpp
dp_double* ansys::dpf::FieldCursor::data() const
```



**Returns**:

Pointer to field data.



**Return type**: [dp\_double](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1acb480013bfed185b5e34a0bdcb0e3790) *

<a id="classansys_1_1dpf_1_1FieldCursor_1a2b9f7981fa3bb19a0a1a0ca13a7f737f"></a>
### Function operator[]

![][public]
![][const]

```cpp
dp_double& ansys::dpf::FieldCursor::operator[](dp_int index) const
```



**Returns**:

[Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) data at given index.



**Parameters**:

* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **index**: [in] Index of data within field.

**Return type**: [dp\_double](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1acb480013bfed185b5e34a0bdcb0e3790) &

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

**TODO**:

* includes {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)