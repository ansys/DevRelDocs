# Class DVS::IHash

<a id="class_d_v_s_1_1_i_hash"></a>

![][C++]
![][public]


Interface to get hash information from DVS objects.



**Inherited by**:

* [DVS::IElementBlock](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block)
* [DVS::IMeshChunk](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk)
* [DVS::IPlotChunk](class_d_v_s_1_1_i_plot_chunk.md#class_d_v_s_1_1_i_plot_chunk)

## Members

* [get\_hash](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1a51eaee86a6e2db4dda7f4326daa33874)
* [get\_hash\_size](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1ac0dedeb8d9dfd442d49d16cb4ddfb221)
* [IHash](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1a2f73d1292c0162a03bd29e9094567a77)
* [IHash](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1a41019f8e16b485b73c1a832df9c21665)
* [IHash](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1a17952af3cbc7170e37f882b17e800b3f)
* [operator=](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1af8c71b16b66a50b92918028b8bbc0d66)
* [operator=](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1aeaed8c50d66653ffe2a16f2d39278734)
* [~IHash](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1a2e08d37be2095880bcb7d77b365ebde3)

## Public functions

<a id="class_d_v_s_1_1_i_hash_1a2f73d1292c0162a03bd29e9094567a77"></a>
### Function IHash

![][public]


```cpp
DVS::IHash::IHash()=default
```


default





**Return type**: 

<a id="class_d_v_s_1_1_i_hash_1a2e08d37be2095880bcb7d77b365ebde3"></a>
### Function ~IHash

![][public]


```cpp
virtual DVS::IHash::~IHash()=default
```


default





**Return type**: 

<a id="class_d_v_s_1_1_i_hash_1a41019f8e16b485b73c1a832df9c21665"></a>
### Function IHash

![][public]


```cpp
DVS::IHash::IHash(IHash &&)=default
```


default





**Parameters**:

* IHash &&

**Return type**: 

<a id="class_d_v_s_1_1_i_hash_1af8c71b16b66a50b92918028b8bbc0d66"></a>
### Function operator=

![][public]


```cpp
IHash & DVS::IHash::operator=(IHash &&)=default
```


default





**Parameters**:

* [IHash](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1a2f73d1292c0162a03bd29e9094567a77) &&

**Return type**: [IHash](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1a2f73d1292c0162a03bd29e9094567a77) &

<a id="class_d_v_s_1_1_i_hash_1a17952af3cbc7170e37f882b17e800b3f"></a>
### Function IHash

![][public]


```cpp
DVS::IHash::IHash(const IHash &)=default
```


support copying





**Parameters**:

* const IHash &

**Return type**: 

<a id="class_d_v_s_1_1_i_hash_1aeaed8c50d66653ffe2a16f2d39278734"></a>
### Function operator=

![][public]


```cpp
IHash & DVS::IHash::operator=(const IHash &)=default
```


default





**Parameters**:

* const [IHash](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1a2f73d1292c0162a03bd29e9094567a77) &

**Return type**: [IHash](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1a2f73d1292c0162a03bd29e9094567a77) &

<a id="class_d_v_s_1_1_i_hash_1ac0dedeb8d9dfd442d49d16cb4ddfb221"></a>
### Function get\_hash\_size

![][public]
![][const]


```cpp
virtual uint32_t DVS::IHash::get_hash_size() const =0
```


Get the size of the hash to use with [IHash::get\_hash()](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1a51eaee86a6e2db4dda7f4326daa33874).

**Returns**:

uint32_t the size of the hash from [IHash::get\_hash()](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1a51eaee86a6e2db4dda7f4326daa33874)



**Return type**: uint32_t

<a id="class_d_v_s_1_1_i_hash_1a51eaee86a6e2db4dda7f4326daa33874"></a>
### Function get\_hash

![][public]
![][const]


```cpp
virtual dvs_ret DVS::IHash::get_hash(char *hash) const =0
```


Get the hash of the data.

The hash of data for DVS objects is a checksum + the hex size of the internal arrays. The size of the has should be retrieved via [IHash::get\_hash\_size()](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1ac0dedeb8d9dfd442d49d16cb4ddfb221) to be compatible with future hash changes





Error Codes:
* DVS_NONE: No error

* DVS_NO_DATA: Object has no data and hash is invalid

* DVS_INVALID_HASH: Hash of data is invalid. There is a problem with the data








**Parameters**:

* **hash**: returns a null terminated string of size [IHash::get\_hash\_size()](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1ac0dedeb8d9dfd442d49d16cb4ddfb221) to be filled if no error


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on no error, otherwise see method description



**Parameters**:

* char * **hash**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)