<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4"></a>
# Class ansys::dpf::DpfVector\< std::string \>

![][C++]
![][public]

**Definition**: `dpf\_api\_base.h` (line 1439)

Represents a modifiable vector of data and manages its memory.

If the [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) is returned by a local entity, then it's a direct pointer to its data else if the [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) is returned by a remote entity, then it's a copy of the data and the remote data is updated (if necessary) when the [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) is destructed.



## Members

* [\_data](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a825a2ab9569e45b97ca72a8efd3c7fa4)
* [copy](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1aa05689f762f50261d089ffa487dc9361)
* [copy](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a30df1fd1e51bd40216d1aaf2bd32e0d2)
* [data](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a68ec071fcb207d7cdc3fe1347ca998f4)
* [defined](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a1a5660a40d27752e8ecf9d901e8fb1c6)
* [DpfVector](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a907aa2b3ea926b801789cf79ee5ad08b)
* [DpfVector](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1aae184e2e944c5bf32cade948d5748974)
* [DpfVector](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a3d896a4c388a8b5929e2cbea5403cdf0)
* [DpfVector](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a3f22bafefe577a577ca1922b7f01494b)
* [DpfVector](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1ae5c9a09c60962b58162340f9f1fb43c4)
* [DpfVector](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1aef8136509e2979b349120c1ad9dabbfa)
* [DpfVector](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a8122bb5ba23d302c236ffb3dfdfb5ffd)
* [fill](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a2dd181a52d0a7cb0692ab3e44aa6afd7)
* [fill](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a4d18ab755be37901053bda9d0d917df4)
* [fillFuncByIntChar](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1aba918e7a9766a1b41d1ec799fe4af52f)
* [fillFuncChar](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1ad39ee6d915fff5cd86f1f22faefd60bf)
* [operator=](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a0d524e8b35626fd79dd04f85d0f84ee7)
* [operator=](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1aa459adcfb76c74f10b214d004da36ba0)
* [operator[]](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1abf7bb24b1472d59bf762ec0a17d3206b)
* [size](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a156b0cca472bfe35a025915e3b09c7d7)
* [~DpfVector](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a5d7b660c69b99f2a44322da6690b9676)

## Private types

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1aba918e7a9766a1b41d1ec799fe4af52f"></a>
### Typedef fillFuncByIntChar

![][private]

**Definition**: `dpf\_api\_base.h` (line 1445)

```cpp
typedef void(* ansys::dpf::DpfVector< std::string >::fillFuncByIntChar) (opaque::DpfObject const  *const obj, opaque::DpfVector *, char ***, int *, int, int &, _TCHAR *&)
```







**Return type**: void(*

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1ad39ee6d915fff5cd86f1f22faefd60bf"></a>
### Typedef fillFuncChar

![][private]

**Definition**: `dpf\_api\_base.h` (line 1446)

```cpp
typedef void(* ansys::dpf::DpfVector< std::string >::fillFuncChar) (opaque::DpfObject const  *const obj, opaque::DpfVector *, char ***, int *, int &, _TCHAR *&)
```







**Return type**: void(*

## Friends

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a5640574bd4988f2739826c3f2f273de5"></a>
### Friend StringField

![][C++]
![][private]

**Definition**: `dpf\_api\_base.h` (line 1442)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class StringField"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classansys_1_1dpf_1_1StringField"},"children":[{"type":"text","text":"StringField"}]}]},{"type":"text","text":"\n        "}]}

## Private attributes

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a825a2ab9569e45b97ca72a8efd3c7fa4"></a>
### Variable \_data

![][private]

**Definition**: `dpf\_api\_base.h` (line 1444)

```cpp
DpfVectorData<char*>* ansys::dpf::DpfVector< std::string >::_data
```







**Type**: DpfVectorData< char * > *

## Private functions

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a907aa2b3ea926b801789cf79ee5ad08b"></a>
### Function DpfVector

![][private]

```cpp
ansys::dpf::DpfVector< std::string >::DpfVector(fillFuncChar const &constructor, opaque::DpfObject *const obj)
```







**Parameters**:

* fillFuncChar const & **constructor**
* opaque::DpfObject *const **obj**

**Return type**: 

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1aae184e2e944c5bf32cade948d5748974"></a>
### Function DpfVector

![][private]

```cpp
ansys::dpf::DpfVector< std::string >::DpfVector(fillFuncByIntChar const &constructor, int id_index, opaque::DpfObject *const obj)
```







**Parameters**:

* fillFuncByIntChar const & **constructor**
* int **id_index**
* opaque::DpfObject *const **obj**

**Return type**: 

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a2dd181a52d0a7cb0692ab3e44aa6afd7"></a>
### Function fill

![][private]

```cpp
void ansys::dpf::DpfVector< std::string >::fill(fillFuncChar const &fill, opaque::DpfObject *const obj)
```







**Parameters**:

* fillFuncChar const & **fill**
* opaque::DpfObject *const **obj**

**Return type**: void

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a4d18ab755be37901053bda9d0d917df4"></a>
### Function fill

![][private]

```cpp
void ansys::dpf::DpfVector< std::string >::fill(fillFuncByIntChar const &fill, int id_index, opaque::DpfObject *const obj)
```







**Parameters**:

* fillFuncByIntChar const & **fill**
* int **id_index**
* opaque::DpfObject *const **obj**

**Return type**: void

## Public functions

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a3d896a4c388a8b5929e2cbea5403cdf0"></a>
### Function DpfVector

![][public]

```cpp
ansys::dpf::DpfVector< std::string >::DpfVector()
```







**Return type**: 

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a3f22bafefe577a577ca1922b7f01494b"></a>
### Function DpfVector

![][public]

```cpp
ansys::dpf::DpfVector< std::string >::DpfVector(DpfTypes const &for_object)
```







**Parameters**:

* [DpfTypes](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes) const & **for_object**

**Return type**: 

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1ae5c9a09c60962b58162340f9f1fb43c4"></a>
### Function DpfVector

![][public]

```cpp
ansys::dpf::DpfVector< std::string >::DpfVector(LibraryHandle const &library_handle)
```







**Parameters**:

* [LibraryHandle](classansys_1_1dpf_1_1LibraryHandle.md#classansys_1_1dpf_1_1LibraryHandle) const & **library_handle**

**Return type**: 

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a5d7b660c69b99f2a44322da6690b9676"></a>
### Function ~DpfVector

![][public]

```cpp
ansys::dpf::DpfVector< std::string >::~DpfVector()
```







**Return type**: 

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1aef8136509e2979b349120c1ad9dabbfa"></a>
### Function DpfVector

![][public]

```cpp
ansys::dpf::DpfVector< std::string >::DpfVector(DpfVector const &)=delete
```







**Parameters**:

* [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) const &

**Return type**: 

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a8122bb5ba23d302c236ffb3dfdfb5ffd"></a>
### Function DpfVector

![][public]

```cpp
ansys::dpf::DpfVector< std::string >::DpfVector(DpfVector &&)
```







**Parameters**:

* [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) &&

**Return type**: 

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a0d524e8b35626fd79dd04f85d0f84ee7"></a>
### Function operator=

![][public]

```cpp
DpfVector& ansys::dpf::DpfVector< std::string >::operator=(DpfVector const &)=delete
```







**Parameters**:

* [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) const &

**Return type**: [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) &

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1aa459adcfb76c74f10b214d004da36ba0"></a>
### Function operator=

![][public]

```cpp
DpfVector& ansys::dpf::DpfVector< std::string >::operator=(DpfVector &&)=delete
```







**Parameters**:

* [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) &&

**Return type**: [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) &

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1abf7bb24b1472d59bf762ec0a17d3206b"></a>
### Function operator[]

![][public]
![][const]

```cpp
std::string ansys::dpf::DpfVector< std::string >::operator[](dp_index idx) const
```







**Parameters**:

* [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) **idx**

**Return type**: std::string

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a68ec071fcb207d7cdc3fe1347ca998f4"></a>
### Function data

![][public]
![][const]

```cpp
char** const ansys::dpf::DpfVector< std::string >::data() const
```







**Return type**: char **const

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a156b0cca472bfe35a025915e3b09c7d7"></a>
### Function size

![][public]
![][const]

```cpp
dp_int ansys::dpf::DpfVector< std::string >::size() const
```



Return the size of the data contained in the [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) object.



**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a1a5660a40d27752e8ecf9d901e8fb1c6"></a>
### Function defined

![][public]
![][const]

```cpp
bool ansys::dpf::DpfVector< std::string >::defined() const
```



Return an true information if the [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) object has data set.



**Return type**: bool

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1aa05689f762f50261d089ffa487dc9361"></a>
### Function copy

![][public]
![][const]

```cpp
void ansys::dpf::DpfVector< std::string >::copy(std::vector< std::string > &to_fill) const
```







**Parameters**:

* std::vector< std::string > & **to_fill**

**Return type**: void

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a30df1fd1e51bd40216d1aaf2bd32e0d2"></a>
### Function copy

![][public]
![][const]

```cpp
std::vector<std::string> ansys::dpf::DpfVector< std::string >::copy() const
```







**Return type**: std::vector< std::string >

**TODO**:

* includes {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api_base.h"}]}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)