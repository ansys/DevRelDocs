<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4"></a>
# Class ansys::dpf::DpfVector\< std::string \>

![][C++]
![][public]

**Definition**: `dpf\_api\_base.h` (line 1646)

Represents a modifiable vector of data and manages its memory.

If the [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) is returned by a local entity, then it's a direct pointer to its data else if the [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) is returned by a remote entity, then it's a copy of the data and the remote data is updated (if necessary) when the [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) is destructed.



## Members

* [\_data](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a825a2ab9569e45b97ca72a8efd3c7fa4)
* [begin](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1a0c627a2093966cc9aef3b1f488571c09)
* [commit](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1a2cc9e64a9e622ee766a5766c2faf85d4)
* [copy](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1aa05689f762f50261d089ffa487dc9361)
* [copy](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a18220ac80c9aaddd3de1288ab29296f6)
* [data](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1afbe78e3c9d22168b7af99c7096ef696b)
* [defined](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a1a5660a40d27752e8ecf9d901e8fb1c6)
* [DpfVector](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a39a0e993001d5e1c6a56f2c19a0b02cf)
* [DpfVector](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a3d896a4c388a8b5929e2cbea5403cdf0)
* [DpfVector](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a3f22bafefe577a577ca1922b7f01494b)
* [DpfVector](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1aef8136509e2979b349120c1ad9dabbfa)
* [DpfVector](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a8122bb5ba23d302c236ffb3dfdfb5ffd)
* [end](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1ab2aff0738b4fa8b223beed776246b3d3)
* [fill](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1ac94e3a284866af57bbb888724efd30c6)
* [fillFunc](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1ad865948302449c2789ac2c836fc3a5b4)
* [fillFuncByInt](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1a40d6740f15bbf968a4271b7d04f3d6c8)
* [fillFuncByIntChar](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1aba918e7a9766a1b41d1ec799fe4af52f)
* [fillFuncByIntCharWithSize](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1aaf5df8a46f73d4e772a57a876ddabb17)
* [fillFuncChar](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1ad39ee6d915fff5cd86f1f22faefd60bf)
* [fillFuncCharWithSize](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a359d026e31d5b073b479466e0f0520a2)
* [fillVoidDataFunc](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1aecdf9d227d3810b2138e80fe2a6e40c7)
* [fillVoidDataFuncByInt](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1a5fbda0c494b964a09226f99d4f79c713)
* [operator=](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1ac0fbd4432b0c2f71e54e0a8c09261f53)
* [operator=](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a1da44cb6b9c8d1c9b329de281b1ecf4a)
* [operator[]](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1abf7bb24b1472d59bf762ec0a17d3206b)
* [reset](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1ad6a4b21b02e43e7e139f59f00b184bbc)
* [size](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a156b0cca472bfe35a025915e3b09c7d7)
* [~DpfVector](classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4.md#classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a5d7b660c69b99f2a44322da6690b9676)

## Private types

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1aba918e7a9766a1b41d1ec799fe4af52f"></a>
### Typedef fillFuncByIntChar

![][private]

**Definition**: `dpf\_api\_base.h` (line 1652)


```cpp
typedef void(* ansys::dpf::DpfVector< std::string >::fillFuncByIntChar) (opaque::DpfObject const  *const obj, opaque::DpfVector *, char ***, int *, int, int &, _TCHAR *&)
```








**Return type**: void(*

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector< std::string >::fillFuncByIntChar"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1ad39ee6d915fff5cd86f1f22faefd60bf"></a>
### Typedef fillFuncChar

![][private]

**Definition**: `dpf\_api\_base.h` (line 1653)


```cpp
typedef void(* ansys::dpf::DpfVector< std::string >::fillFuncChar) (opaque::DpfObject const  *const obj, opaque::DpfVector *, char ***, int *, int &, _TCHAR *&)
```








**Return type**: void(*

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector< std::string >::fillFuncChar"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1aaf5df8a46f73d4e772a57a876ddabb17"></a>
### Typedef fillFuncByIntCharWithSize

![][private]

**Definition**: `dpf\_api\_base.h` (line 1654)


```cpp
typedef void(* ansys::dpf::DpfVector< std::string >::fillFuncByIntCharWithSize) (opaque::DpfObject const  *const obj, opaque::DpfVector *, char ***, size_t **, int *, int, int &, _TCHAR *&)
```








**Return type**: void(*

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector< std::string >::fillFuncByIntCharWithSize"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a359d026e31d5b073b479466e0f0520a2"></a>
### Typedef fillFuncCharWithSize

![][private]

**Definition**: `dpf\_api\_base.h` (line 1655)


```cpp
typedef void(* ansys::dpf::DpfVector< std::string >::fillFuncCharWithSize) (opaque::DpfObject const  *const obj, opaque::DpfVector *, char ***, size_t **, int *, int &, _TCHAR *&)
```








**Return type**: void(*

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector< std::string >::fillFuncCharWithSize"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_1a40d6740f15bbf968a4271b7d04f3d6c8"></a>
### Typedef fillFuncByInt

![][private]

**Definition**: `dpf\_api\_base.h` (line 1370)


```cpp
typedef void(* ansys::dpf::DpfVector< std::string >::fillFuncByInt) (opaque::DpfObject const *const obj, opaque::DpfVector *, std::string **, int *, int, int &, _TCHAR *&)
```








**Return type**: void(*

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector< std::string >::fillFuncByInt"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_1ad865948302449c2789ac2c836fc3a5b4"></a>
### Typedef fillFunc

![][private]

**Definition**: `dpf\_api\_base.h` (line 1371)


```cpp
typedef void(* ansys::dpf::DpfVector< std::string >::fillFunc) (opaque::DpfObject const *const obj, opaque::DpfVector *, std::string **, int *, int &, _TCHAR *&)
```








**Return type**: void(*

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector< std::string >::fillFunc"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_1a5fbda0c494b964a09226f99d4f79c713"></a>
### Typedef fillVoidDataFuncByInt

![][private]

**Definition**: `dpf\_api\_base.h` (line 1372)


```cpp
typedef void(* ansys::dpf::DpfVector< std::string >::fillVoidDataFuncByInt) (opaque::DpfObject const *const obj, opaque::DpfVector *, void **, int *, int, int &, _TCHAR *&)
```








**Return type**: void(*

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector< std::string >::fillVoidDataFuncByInt"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_1aecdf9d227d3810b2138e80fe2a6e40c7"></a>
### Typedef fillVoidDataFunc

![][private]

**Definition**: `dpf\_api\_base.h` (line 1373)


```cpp
typedef void(* ansys::dpf::DpfVector< std::string >::fillVoidDataFunc) (opaque::DpfObject const *const obj, opaque::DpfVector *, void **, int *, int &, _TCHAR *&)
```








**Return type**: void(*

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector< std::string >::fillVoidDataFunc"}]}`
-->

## Friends

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a5640574bd4988f2739826c3f2f273de5"></a>
### Friend StringField

![][C++]
![][private]

**Definition**: `dpf\_api\_base.h` (line 1649)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class StringField"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector< std::string >::StringField"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"StringField"}]},{"type":"text","text":"\n        "}]}`
-->

## Private attributes

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a825a2ab9569e45b97ca72a8efd3c7fa4"></a>
### Variable \_data

![][private]

**Definition**: `dpf\_api\_base.h` (line 1651)


```cpp
DpfVectorData<char*>* ansys::dpf::DpfVector< std::string >::_data
```








**Type**: DpfVectorData< char * > *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector< std::string >::_data"}]}`
-->

## Private functions

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a39a0e993001d5e1c6a56f2c19a0b02cf"></a>
### Function DpfVector

![][private]


```cpp
ansys::dpf::DpfVector< std::string >::DpfVector(fillFuncCharWithSize const &new_constructor, fillFuncChar const &constructor, opaque::DpfObject *const obj)
```








**Parameters**:

* fillFuncCharWithSize const & **new_constructor**
* fillFuncChar const & **constructor**
* opaque::DpfObject *const **obj**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector< std::string >::DpfVector"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1ac94e3a284866af57bbb888724efd30c6"></a>
### Function fill

![][private]


```cpp
void ansys::dpf::DpfVector< std::string >::fill(fillFuncByIntCharWithSize const &new_fill, fillFuncByIntChar const &fill, int id_index, opaque::DpfObject *const obj)
```








**Parameters**:

* fillFuncByIntCharWithSize const & **new_fill**
* fillFuncByIntChar const & **fill**
* int **id_index**
* opaque::DpfObject *const **obj**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector< std::string >::fill"}]}`
-->

## Public functions

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a3d896a4c388a8b5929e2cbea5403cdf0"></a>
### Function DpfVector

![][public]


```cpp
ansys::dpf::DpfVector< std::string >::DpfVector()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector< std::string >::DpfVector"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a3f22bafefe577a577ca1922b7f01494b"></a>
### Function DpfVector

![][public]


```cpp
ansys::dpf::DpfVector< std::string >::DpfVector(DpfTypes const &for_object)
```








**Parameters**:

* [DpfTypes](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes) const & **for_object**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector< std::string >::DpfVector"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a5d7b660c69b99f2a44322da6690b9676"></a>
### Function ~DpfVector

![][public]


```cpp
ansys::dpf::DpfVector< std::string >::~DpfVector()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector< std::string >::~DpfVector"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1aef8136509e2979b349120c1ad9dabbfa"></a>
### Function DpfVector

![][public]


```cpp
ansys::dpf::DpfVector< std::string >::DpfVector(DpfVector const &)=delete
```








**Parameters**:

* DpfVector const &

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector< std::string >::DpfVector"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a8122bb5ba23d302c236ffb3dfdfb5ffd"></a>
### Function DpfVector

![][public]


```cpp
ansys::dpf::DpfVector< std::string >::DpfVector(DpfVector &&)
```








**Parameters**:

* DpfVector &&

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector< std::string >::DpfVector"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1ac0fbd4432b0c2f71e54e0a8c09261f53"></a>
### Function operator=

![][public]


```cpp
DpfVector & ansys::dpf::DpfVector< std::string >::operator=(DpfVector const &)=delete
```








**Parameters**:

* DpfVector const &

**Return type**: DpfVector &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector< std::string >::operator="}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a1da44cb6b9c8d1c9b329de281b1ecf4a"></a>
### Function operator=

![][public]


```cpp
DpfVector & ansys::dpf::DpfVector< std::string >::operator=(DpfVector &&)=delete
```








**Parameters**:

* DpfVector &&

**Return type**: DpfVector &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector< std::string >::operator="}]}`
-->

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

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector< std::string >::operator[]"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1afbe78e3c9d22168b7af99c7096ef696b"></a>
### Function data

![][public]
![][const]


```cpp
char **const ansys::dpf::DpfVector< std::string >::data() const
```








**Return type**: char **const

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector< std::string >::data"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a156b0cca472bfe35a025915e3b09c7d7"></a>
### Function size

![][public]
![][const]


```cpp
dp_int ansys::dpf::DpfVector< std::string >::size() const
```




Return the size of the data contained in the [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) object.



**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector< std::string >::size"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a1a5660a40d27752e8ecf9d901e8fb1c6"></a>
### Function defined

![][public]
![][const]


```cpp
bool ansys::dpf::DpfVector< std::string >::defined() const
```




Return an true information if the [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) object has data set.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector< std::string >::defined"}]}`
-->

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

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector< std::string >::copy"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_3_01std_1_1string_01_4_1a18220ac80c9aaddd3de1288ab29296f6"></a>
### Function copy

![][public]
![][const]


```cpp
std::vector< std::string > ansys::dpf::DpfVector< std::string >::copy() const
```








**Return type**: std::vector< std::string >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector< std::string >::copy"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_1a2cc9e64a9e622ee766a5766c2faf85d4"></a>
### Function commit

![][public]
![][const]


```cpp
void ansys::dpf::DpfVector< std::string >::commit() const
```




Update the data in the object (if the vector is pointing on remote data).



**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector< std::string >::commit"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_1a0c627a2093966cc9aef3b1f488571c09"></a>
### Function begin

![][public]
![][const]


```cpp
iterator ansys::dpf::DpfVector< std::string >::begin() const
```








**Return type**: iterator

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector< std::string >::begin"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_1ab2aff0738b4fa8b223beed776246b3d3"></a>
### Function end

![][public]
![][const]


```cpp
iterator ansys::dpf::DpfVector< std::string >::end() const
```








**Return type**: iterator

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector< std::string >::end"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_1ad6a4b21b02e43e7e139f59f00b184bbc"></a>
### Function reset

![][public]


```cpp
void ansys::dpf::DpfVector< std::string >::reset(iterator const &begin, iterator const &end)
```


Reinitialize the data with a range of an other vector (range from begin to end).

Copyless: the new data is created with a reference on the same data as begin and end: modifying the new vector data, will also modify the initial vector.



**Parameters**:

* iterator const & **begin**
* iterator const & **end**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector< std::string >::reset"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api_base.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)