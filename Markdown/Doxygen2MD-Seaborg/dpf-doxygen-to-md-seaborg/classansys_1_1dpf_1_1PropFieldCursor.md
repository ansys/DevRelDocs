<a id="classansys_1_1dpf_1_1PropFieldCursor"></a>
# Class ansys::dpf::PropFieldCursor

![][C++]
![][public]

**Definition**: `dpf\_api.h` (line 1060)



Represents complete property data(id, size, num elementary data)

## Members

* [\_data](classansys_1_1dpf_1_1PropFieldCursor.md#classansys_1_1dpf_1_1PropFieldCursor_1aaf953b8f54eb9f430f4c76ae1d28d188)
* [\_defined](classansys_1_1dpf_1_1PropFieldCursor.md#classansys_1_1dpf_1_1PropFieldCursor_1a1c869248d2dde8296b294061536ad23c)
* [\_id](classansys_1_1dpf_1_1PropFieldCursor.md#classansys_1_1dpf_1_1PropFieldCursor_1adbecee231254353874983533962c8191)
* [\_n\_component](classansys_1_1dpf_1_1PropFieldCursor.md#classansys_1_1dpf_1_1PropFieldCursor_1af4e80d71af1a1b30bb97905b76545a0e)
* [\_n\_elementary\_data](classansys_1_1dpf_1_1PropFieldCursor.md#classansys_1_1dpf_1_1PropFieldCursor_1ac812e90ddc03293e9f0736a64169de3f)
* [\_size](classansys_1_1dpf_1_1PropFieldCursor.md#classansys_1_1dpf_1_1PropFieldCursor_1aef4d9c662bb18d5ea420114b15741b66)
* [data](classansys_1_1dpf_1_1PropFieldCursor.md#classansys_1_1dpf_1_1PropFieldCursor_1a55e141a0113b4e00dc32a3b312c4ddf6)
* [defined](classansys_1_1dpf_1_1PropFieldCursor.md#classansys_1_1dpf_1_1PropFieldCursor_1a21c28026e67c8724b6610f545647f289)
* [id](classansys_1_1dpf_1_1PropFieldCursor.md#classansys_1_1dpf_1_1PropFieldCursor_1ae4525edd503db4d6a9892428facc2f92)
* [numberOfComponents](classansys_1_1dpf_1_1PropFieldCursor.md#classansys_1_1dpf_1_1PropFieldCursor_1a8647f34e38981812b3a6c37b0d859567)
* [numberOfElementaryData](classansys_1_1dpf_1_1PropFieldCursor.md#classansys_1_1dpf_1_1PropFieldCursor_1aba47f2547a400007ff5140bb23addaf6)
* [operator[]](classansys_1_1dpf_1_1PropFieldCursor.md#classansys_1_1dpf_1_1PropFieldCursor_1a34ed0ee2cd28523c04400ec5d48e9703)
* [size](classansys_1_1dpf_1_1PropFieldCursor.md#classansys_1_1dpf_1_1PropFieldCursor_1a269c1fad1eab6210e2f0e271bd0a1b34)

## Friends

<a id="classansys_1_1dpf_1_1PropFieldCursor_1abb4aa5a7ed62b741f0b146a257d0fe5e"></a>
### Friend PropertyField

![][C++]
![][public]

**Definition**: `dpf\_api.h` (line 1063)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class PropertyField"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classansys_1_1dpf_1_1PropertyField"},"children":[{"type":"text","text":"PropertyField"}]}]},{"type":"text","text":"\n        "}]}

## Private attributes

<a id="classansys_1_1dpf_1_1PropFieldCursor_1aaf953b8f54eb9f430f4c76ae1d28d188"></a>
### Variable \_data

![][private]

**Definition**: `dpf\_api.h` (line 1066)

```cpp
dp_int* ansys::dpf::PropFieldCursor::_data
```







**Type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) *

<a id="classansys_1_1dpf_1_1PropFieldCursor_1aef4d9c662bb18d5ea420114b15741b66"></a>
### Variable \_size

![][private]

**Definition**: `dpf\_api.h` (line 1067)

```cpp
dp_int ansys::dpf::PropFieldCursor::_size
```







**Type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<a id="classansys_1_1dpf_1_1PropFieldCursor_1adbecee231254353874983533962c8191"></a>
### Variable \_id

![][private]

**Definition**: `dpf\_api.h` (line 1068)

```cpp
dp_id ansys::dpf::PropFieldCursor::_id
```







**Type**: [dp\_id](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ab4574c9af3f2bb8011da7d1f4c8da20e)

<a id="classansys_1_1dpf_1_1PropFieldCursor_1af4e80d71af1a1b30bb97905b76545a0e"></a>
### Variable \_n\_component

![][private]

**Definition**: `dpf\_api.h` (line 1069)

```cpp
dp_int ansys::dpf::PropFieldCursor::_n_component
```







**Type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<a id="classansys_1_1dpf_1_1PropFieldCursor_1ac812e90ddc03293e9f0736a64169de3f"></a>
### Variable \_n\_elementary\_data

![][private]

**Definition**: `dpf\_api.h` (line 1070)

```cpp
dp_int ansys::dpf::PropFieldCursor::_n_elementary_data
```







**Type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<a id="classansys_1_1dpf_1_1PropFieldCursor_1a1c869248d2dde8296b294061536ad23c"></a>
### Variable \_defined

![][private]

**Definition**: `dpf\_api.h` (line 1071)

```cpp
bool ansys::dpf::PropFieldCursor::_defined
```







**Type**: bool

## Public functions

<a id="classansys_1_1dpf_1_1PropFieldCursor_1a55e141a0113b4e00dc32a3b312c4ddf6"></a>
### Function data

![][public]
![][const]

```cpp
dp_int* ansys::dpf::PropFieldCursor::data() const
```



**Returns**:

Pointer to property data.



**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) *

<a id="classansys_1_1dpf_1_1PropFieldCursor_1a34ed0ee2cd28523c04400ec5d48e9703"></a>
### Function operator[]

![][public]
![][const]

```cpp
dp_int& ansys::dpf::PropFieldCursor::operator[](dp_int index) const
```



**Returns**:

Property data at given index.



**Parameters**:

* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **index**: [in] Index of data within [PropertyField](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField).

**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) &

<a id="classansys_1_1dpf_1_1PropFieldCursor_1a269c1fad1eab6210e2f0e271bd0a1b34"></a>
### Function size

![][public]
![][const]

```cpp
dp_int ansys::dpf::PropFieldCursor::size() const
```



**Returns**:

Size of property data.



**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<a id="classansys_1_1dpf_1_1PropFieldCursor_1ae4525edd503db4d6a9892428facc2f92"></a>
### Function id

![][public]
![][const]

```cpp
dp_id ansys::dpf::PropFieldCursor::id() const
```



**Returns**:

Id of property.



**Return type**: [dp\_id](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ab4574c9af3f2bb8011da7d1f4c8da20e)

<a id="classansys_1_1dpf_1_1PropFieldCursor_1a8647f34e38981812b3a6c37b0d859567"></a>
### Function numberOfComponents

![][public]
![][const]

```cpp
dp_int ansys::dpf::PropFieldCursor::numberOfComponents() const
```



**Returns**:

Number of components in property data.



**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<a id="classansys_1_1dpf_1_1PropFieldCursor_1aba47f2547a400007ff5140bb23addaf6"></a>
### Function numberOfElementaryData

![][public]
![][const]

```cpp
dp_int ansys::dpf::PropFieldCursor::numberOfElementaryData() const
```



**Returns**:

Number of entries in property data.



**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<a id="classansys_1_1dpf_1_1PropFieldCursor_1a21c28026e67c8724b6610f545647f289"></a>
### Function defined

![][public]
![][const]

```cpp
bool ansys::dpf::PropFieldCursor::defined() const
```



**Returns**:

Indication that property defined



**Return type**: bool

**TODO**:

* includes {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)