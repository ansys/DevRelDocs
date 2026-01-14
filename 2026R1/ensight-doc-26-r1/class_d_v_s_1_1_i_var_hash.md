# Class DVS::IVarHash

<a id="class_d_v_s_1_1_i_var_hash"></a>

![][C++]
![][public]


Interface to get variable hash information from DVS objects.



**Inherited by**:

* [DVS::IElementBlock](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block)
* [DVS::IMeshChunk](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk)

## Members

* [get\_var\_hash](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1a17fff1548eb276edd326a0af08f6a7c4)
* [get\_var\_hash](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1a7348be86da47ac034252a68949b21007)
* [get\_var\_hash\_size](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1a85c3ade756029207e15b1c8de8cd5c1b)
* [get\_var\_hash\_size](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1a81cd99bbf69ccc0d50e8bcb7dd291046)
* [IVarHash](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1a9b1a7d92f3c9c67d25be7b2cc4658b95)
* [IVarHash](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1ae9c19f92692dee9f5d287ebc6e059dfb)
* [IVarHash](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1a056227972d92b22777ee19f60e1794f6)
* [operator=](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1a53d713fd8e14a28ad11fefb30c2fda03)
* [operator=](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1a6aba4bc5fbf125a434cbb88f94a0dfb2)
* [~IVarHash](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1a7b2a92106ec38f910d49a1c179419871)

## Public functions

<a id="class_d_v_s_1_1_i_var_hash_1a9b1a7d92f3c9c67d25be7b2cc4658b95"></a>
### Function IVarHash

![][public]


```cpp
DVS::IVarHash::IVarHash()=default
```


default





**Return type**: 

<a id="class_d_v_s_1_1_i_var_hash_1a7b2a92106ec38f910d49a1c179419871"></a>
### Function ~IVarHash

![][public]


```cpp
virtual DVS::IVarHash::~IVarHash()=default
```


default





**Return type**: 

<a id="class_d_v_s_1_1_i_var_hash_1ae9c19f92692dee9f5d287ebc6e059dfb"></a>
### Function IVarHash

![][public]


```cpp
DVS::IVarHash::IVarHash(IVarHash &&)=default
```


default





**Parameters**:

* IVarHash &&

**Return type**: 

<a id="class_d_v_s_1_1_i_var_hash_1a53d713fd8e14a28ad11fefb30c2fda03"></a>
### Function operator=

![][public]


```cpp
IVarHash & DVS::IVarHash::operator=(IVarHash &&)=default
```


default





**Parameters**:

* [IVarHash](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1a9b1a7d92f3c9c67d25be7b2cc4658b95) &&

**Return type**: [IVarHash](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1a9b1a7d92f3c9c67d25be7b2cc4658b95) &

<a id="class_d_v_s_1_1_i_var_hash_1a056227972d92b22777ee19f60e1794f6"></a>
### Function IVarHash

![][public]


```cpp
DVS::IVarHash::IVarHash(const IVarHash &)=default
```


support copying





**Parameters**:

* const IVarHash &

**Return type**: 

<a id="class_d_v_s_1_1_i_var_hash_1a6aba4bc5fbf125a434cbb88f94a0dfb2"></a>
### Function operator=

![][public]


```cpp
IVarHash & DVS::IVarHash::operator=(const IVarHash &)=default
```


default





**Parameters**:

* const [IVarHash](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1a9b1a7d92f3c9c67d25be7b2cc4658b95) &

**Return type**: [IVarHash](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1a9b1a7d92f3c9c67d25be7b2cc4658b95) &

<a id="class_d_v_s_1_1_i_var_hash_1a85c3ade756029207e15b1c8de8cd5c1b"></a>
### Function get\_var\_hash\_size

![][public]
![][const]


```cpp
virtual uint32_t DVS::IVarHash::get_var_hash_size(uint32_t index, VAR_TYPE type=VAR_TYPE::FLOAT) const =0
```


Get the size of the hash to use with [IVarHash::get\_var\_hash()](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1a17fff1548eb276edd326a0af08f6a7c4).

**Parameters**:

* **index**: index of the variable data (range 0, get_num_variables() on object this is on)
* **type**: the enum type. By default, VAR_TYPE::FLOAT


**Returns**:

uint32_t the size of the hash from [IVarHash::get\_var\_hash()](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1a17fff1548eb276edd326a0af08f6a7c4), 0 if invalid index



**Parameters**:

* uint32_t **index**
* [VAR\_TYPE](namespace_d_v_s.md#dvs__var__interface_8h_1a84856d33cb231d1d87a603758b8b8066) **type** = VAR_TYPE::FLOAT 

**Return type**: uint32_t

<a id="class_d_v_s_1_1_i_var_hash_1a81cd99bbf69ccc0d50e8bcb7dd291046"></a>
### Function get\_var\_hash\_size

![][public]
![][const]


```cpp
virtual uint32_t DVS::IVarHash::get_var_hash_size(const IVar *var) const =0
```


Get the size of the hash to use with [IVarHash::get\_var\_hash()](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1a17fff1548eb276edd326a0af08f6a7c4).

**Parameters**:

* **var**: the variable definition to retrieve nodal variable data for


**Returns**:

uint32_t the size of the hash from [IVarHash::get\_var\_hash()](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1a17fff1548eb276edd326a0af08f6a7c4), 0 if invalid var



**Parameters**:

* const [IVar](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var) * **var**

**Return type**: uint32_t

<a id="class_d_v_s_1_1_i_var_hash_1a17fff1548eb276edd326a0af08f6a7c4"></a>
### Function get\_var\_hash

![][public]
![][const]


```cpp
virtual dvs_ret DVS::IVarHash::get_var_hash(uint32_t index, char *hash, VAR_TYPE type=VAR_TYPE::FLOAT) const =0
```


Get the hash of the variable data.

The hash of data for DVS objects is a checksum + the hex size of the internal arrays. The size of the has should be retrieved via [IVarHash::get\_var\_hash\_size()](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1a85c3ade756029207e15b1c8de8cd5c1b) to be compatible with future hash changes





Error Codes:
* DVS_NONE: No error

* DVS_INVALID_HASH: Hash of data is invalid. There is a problem with the data

* DVS_PARAM_OUT_OF_BOUNDS: Index out of bounds of [0, get_num_variables() on object this is called on]

* DVS_PARAM_NULL: All parameters are null. Method will do nothing.








**Parameters**:

* **index**: the index of the variable data (range 0, get_num_variables() on object this is on)
* **hash**: returns a null terminated string of size IVarHash::get_hash_size() to be filled if no error
* **type**: the enum type. By default, VAR_TYPE::FLOAT


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on no error, otherwise see method description



**Parameters**:

* uint32_t **index**
* char * **hash**
* [VAR\_TYPE](namespace_d_v_s.md#dvs__var__interface_8h_1a84856d33cb231d1d87a603758b8b8066) **type** = VAR_TYPE::FLOAT 

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_var_hash_1a7348be86da47ac034252a68949b21007"></a>
### Function get\_var\_hash

![][public]
![][const]


```cpp
virtual dvs_ret DVS::IVarHash::get_var_hash(const IVar *var, char *hash) const =0
```


Get the hash of the variable data.

The hash of data for DVS objects is a checksum + the hex size of the internal arrays. The size of the has should be retrieved via [IVarHash::get\_var\_hash\_size()](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1a85c3ade756029207e15b1c8de8cd5c1b) to be compatible with future hash changes





Error Codes:
* DVS_NONE: No error

* DVS_INVALID_HASH: Hash of data is invalid. There is a problem with the data

* DVS_PARAM_INVALID_VAR: Bad (or null) variable object passed into method

* DVS_PARAM_INVALID_VAR_ID: Mesh chunk does not have data for var passed in.

* DVS_PARAM_NULL: All parameters are null. Method will do nothing.








**Parameters**:

* **var**: var of the variable data, not nullptr
* **hash**: returns a null terminated string of size IVarHash::get_hash_size() to be filled if no error


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on no error, otherwise see method description



**Parameters**:

* const [IVar](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var) * **var**
* char * **hash**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)