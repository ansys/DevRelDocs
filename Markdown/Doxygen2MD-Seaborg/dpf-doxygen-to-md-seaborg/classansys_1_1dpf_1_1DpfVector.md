<a id="classansys_1_1dpf_1_1DpfVector"></a>
# Class ansys::dpf::DpfVector

![][C++]
![][public]

**Definition**: `dpf\_api\_base.h` (line 1236)

Represents a modifiable vector of data and manages its memory.

If the [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) is returned by a local entity, then it's a direct pointer to its data else if the [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) is returned by a remote entity, then it's a copy of the data and the remote data is updated (if necessary) when the [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) is destructed.

**Template parameters**:

* typename T

## Members

* [\_data](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1afc86cb6f43e669c4d4e3eabfa4f5b18f)
* [commit](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1a2cc9e64a9e622ee766a5766c2faf85d4)
* [copy](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1a1a9c97d138baa7c3f00f3e1e80d3572d)
* [copy](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1a31354ff982c53a6e327c7210c2878092)
* [data](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1a8470a9e4e9231bc076637a4e8a6f8322)
* [data](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1a3549db7551348bf4c845b777a598b22b)
* [defined](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1a0e5b28ad59e3352941d64e760b688f91)
* [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1a2e4be3434f3bb36009ce4cbbd2cfbde1)
* [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1a04bcd753eed2d9e5c078b915c703f188)
* [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1a57016d197c031ccedc38176449bc47ae)
* [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1a62440d0dab6734670eb63dc6fb688eda)
* [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1a762b4ce9bc3f7035f3c5a3f27e6dc7ad)
* [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1a221a18e95bb54fd6ca069b2a2a0f75e6)
* [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1ad6c298a240c1d771cd35863b08221f0b)
* [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1a26e77263ac8e72cc00383d849793c67c)
* [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1a861713b25289232791ac9fa25304cbbd)
* [fill](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1a0f91a7f6075fbf1e53164832fc9adc6e)
* [fill](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1a19abf97019e8ea15dfb9a7e67b4d284b)
* [fill](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1aaf48ee2db06dc38eced85afd80f1bccc)
* [fill](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1a61afbf4d711499ab3e49506abde7f383)
* [fillFunc](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1ad865948302449c2789ac2c836fc3a5b4)
* [fillFuncByInt](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1a40d6740f15bbf968a4271b7d04f3d6c8)
* [fillVoidDataFunc](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1aecdf9d227d3810b2138e80fe2a6e40c7)
* [fillVoidDataFuncByInt](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1a5fbda0c494b964a09226f99d4f79c713)
* [operator=](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1a4b722e69eb6772eee74d497b243763e0)
* [operator=](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1a92dc2ad033a53f618b45600dc4bd091a)
* [operator[]](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1adbf45d7edf6c4d39c867cf3259a4842f)
* [operator[]](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1a415f918ff1a4edc082ef4c5ab50e2276)
* [size](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1acb74f526bb5e61fef09605354966ff16)
* [~DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1a87d680a6d344aab93501db869f76d212)

## Private types

<a id="classansys_1_1dpf_1_1DpfVector_1a40d6740f15bbf968a4271b7d04f3d6c8"></a>
### Typedef fillFuncByInt

![][private]

**Definition**: `dpf\_api\_base.h` (line 1249)

```cpp
typedef void(* ansys::dpf::DpfVector< T >::fillFuncByInt) (opaque::DpfObject const  *const obj, opaque::DpfVector *, T **, int *, int, int &, _TCHAR *&)
```







**Return type**: void(*

<a id="classansys_1_1dpf_1_1DpfVector_1ad865948302449c2789ac2c836fc3a5b4"></a>
### Typedef fillFunc

![][private]

**Definition**: `dpf\_api\_base.h` (line 1250)

```cpp
typedef void(* ansys::dpf::DpfVector< T >::fillFunc) (opaque::DpfObject const  *const obj, opaque::DpfVector *, T **, int *, int &, _TCHAR *&)
```







**Return type**: void(*

<a id="classansys_1_1dpf_1_1DpfVector_1a5fbda0c494b964a09226f99d4f79c713"></a>
### Typedef fillVoidDataFuncByInt

![][private]

**Definition**: `dpf\_api\_base.h` (line 1251)

```cpp
typedef void(* ansys::dpf::DpfVector< T >::fillVoidDataFuncByInt) (opaque::DpfObject const  *const obj, opaque::DpfVector *, void **, int *, int, int &, _TCHAR *&)
```







**Return type**: void(*

<a id="classansys_1_1dpf_1_1DpfVector_1aecdf9d227d3810b2138e80fe2a6e40c7"></a>
### Typedef fillVoidDataFunc

![][private]

**Definition**: `dpf\_api\_base.h` (line 1252)

```cpp
typedef void(* ansys::dpf::DpfVector< T >::fillVoidDataFunc) (opaque::DpfObject const  *const obj, opaque::DpfVector *, void **, int *, int &, _TCHAR *&)
```







**Return type**: void(*

## Friends

<a id="classansys_1_1dpf_1_1DpfVector_1aaec47a26a3c11c1debd3ed922b69cbd2"></a>
### Friend Field

![][C++]
![][private]

**Definition**: `dpf\_api\_base.h` (line 1239)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Field"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classansys_1_1dpf_1_1Field"},"children":[{"type":"text","text":"Field"}]}]},{"type":"text","text":"\n        "}]}

<a id="classansys_1_1dpf_1_1DpfVector_1abb4aa5a7ed62b741f0b146a257d0fe5e"></a>
### Friend PropertyField

![][C++]
![][private]

**Definition**: `dpf\_api\_base.h` (line 1240)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class PropertyField"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classansys_1_1dpf_1_1PropertyField"},"children":[{"type":"text","text":"PropertyField"}]}]},{"type":"text","text":"\n        "}]}

<a id="classansys_1_1dpf_1_1DpfVector_1ad19b1aa2f28448bd897fc6c5dd771f02"></a>
### Friend CustomTypeField

![][C++]
![][private]

**Definition**: `dpf\_api\_base.h` (line 1241)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class CustomTypeField"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classansys_1_1dpf_1_1CustomTypeField"},"children":[{"type":"text","text":"CustomTypeField"}]}]},{"type":"text","text":"\n        "}]}

<a id="classansys_1_1dpf_1_1DpfVector_1a5640574bd4988f2739826c3f2f273de5"></a>
### Friend StringField

![][C++]
![][private]

**Definition**: `dpf\_api\_base.h` (line 1242)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class StringField"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classansys_1_1dpf_1_1StringField"},"children":[{"type":"text","text":"StringField"}]}]},{"type":"text","text":"\n        "}]}

<a id="classansys_1_1dpf_1_1DpfVector_1ad79d4cf6207e0f288cb6275512b0d4ec"></a>
### Friend Scoping

![][C++]
![][private]

**Definition**: `dpf\_api\_base.h` (line 1243)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Scoping"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classansys_1_1dpf_1_1Scoping"},"children":[{"type":"text","text":"Scoping"}]}]},{"type":"text","text":"\n        "}]}

<a id="classansys_1_1dpf_1_1DpfVector_1a33ff3f826991522d2e77c1c523f33e19"></a>
### Friend Operator

![][C++]
![][private]

**Definition**: `dpf\_api\_base.h` (line 1244)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Operator"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classansys_1_1dpf_1_1Operator"},"children":[{"type":"text","text":"Operator"}]}]},{"type":"text","text":"\n        "}]}

<a id="classansys_1_1dpf_1_1DpfVector_1afa07847c7cb432b260e61a0c18025ba3"></a>
### Friend Workflow

![][C++]
![][private]

**Definition**: `dpf\_api\_base.h` (line 1245)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Workflow"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classansys_1_1dpf_1_1Workflow"},"children":[{"type":"text","text":"Workflow"}]}]},{"type":"text","text":"\n        "}]}

## Private attributes

<a id="classansys_1_1dpf_1_1DpfVector_1afc86cb6f43e669c4d4e3eabfa4f5b18f"></a>
### Variable \_data

![][private]

**Definition**: `dpf\_api\_base.h` (line 1247)

```cpp
DpfVectorData<T>* ansys::dpf::DpfVector< T >::_data
```







**Type**: DpfVectorData< T > *

## Private functions

<a id="classansys_1_1dpf_1_1DpfVector_1a2e4be3434f3bb36009ce4cbbd2cfbde1"></a>
### Function DpfVector

![][private]

```cpp
ansys::dpf::DpfVector< T >::DpfVector(fillFunc const &constructor, opaque::DpfObject *const obj)
```







**Parameters**:

* fillFunc const & **constructor**
* opaque::DpfObject *const **obj**

**Return type**: 

<a id="classansys_1_1dpf_1_1DpfVector_1a04bcd753eed2d9e5c078b915c703f188"></a>
### Function DpfVector

![][private]

```cpp
ansys::dpf::DpfVector< T >::DpfVector(fillFuncByInt const &constructor, int id_index, opaque::DpfObject *const obj)
```







**Parameters**:

* fillFuncByInt const & **constructor**
* int **id_index**
* opaque::DpfObject *const **obj**

**Return type**: 

<a id="classansys_1_1dpf_1_1DpfVector_1a57016d197c031ccedc38176449bc47ae"></a>
### Function DpfVector

![][private]

```cpp
ansys::dpf::DpfVector< T >::DpfVector(fillVoidDataFunc const &constructor, opaque::DpfObject *const obj)
```







**Parameters**:

* fillVoidDataFunc const & **constructor**
* opaque::DpfObject *const **obj**

**Return type**: 

<a id="classansys_1_1dpf_1_1DpfVector_1a62440d0dab6734670eb63dc6fb688eda"></a>
### Function DpfVector

![][private]

```cpp
ansys::dpf::DpfVector< T >::DpfVector(fillVoidDataFuncByInt const &constructor, int id_index, opaque::DpfObject *const obj)
```







**Parameters**:

* fillVoidDataFuncByInt const & **constructor**
* int **id_index**
* opaque::DpfObject *const **obj**

**Return type**: 

<a id="classansys_1_1dpf_1_1DpfVector_1a0f91a7f6075fbf1e53164832fc9adc6e"></a>
### Function fill

![][private]

```cpp
void ansys::dpf::DpfVector< T >::fill(fillFunc const &fill, opaque::DpfObject *const obj)
```







**Parameters**:

* fillFunc const & **fill**
* opaque::DpfObject *const **obj**

**Return type**: void

<a id="classansys_1_1dpf_1_1DpfVector_1a19abf97019e8ea15dfb9a7e67b4d284b"></a>
### Function fill

![][private]

```cpp
void ansys::dpf::DpfVector< T >::fill(fillFuncByInt const &fill, int id_index, opaque::DpfObject *const obj)
```







**Parameters**:

* fillFuncByInt const & **fill**
* int **id_index**
* opaque::DpfObject *const **obj**

**Return type**: void

<a id="classansys_1_1dpf_1_1DpfVector_1aaf48ee2db06dc38eced85afd80f1bccc"></a>
### Function fill

![][private]

```cpp
void ansys::dpf::DpfVector< T >::fill(fillVoidDataFunc const &fill, opaque::DpfObject *const obj)
```







**Parameters**:

* fillVoidDataFunc const & **fill**
* opaque::DpfObject *const **obj**

**Return type**: void

<a id="classansys_1_1dpf_1_1DpfVector_1a61afbf4d711499ab3e49506abde7f383"></a>
### Function fill

![][private]

```cpp
void ansys::dpf::DpfVector< T >::fill(fillVoidDataFuncByInt const &fill, int id_index, opaque::DpfObject *const obj)
```







**Parameters**:

* fillVoidDataFuncByInt const & **fill**
* int **id_index**
* opaque::DpfObject *const **obj**

**Return type**: void

## Public functions

<a id="classansys_1_1dpf_1_1DpfVector_1a762b4ce9bc3f7035f3c5a3f27e6dc7ad"></a>
### Function DpfVector

![][public]

```cpp
ansys::dpf::DpfVector< T >::DpfVector()
```







**Return type**: 

<a id="classansys_1_1dpf_1_1DpfVector_1a221a18e95bb54fd6ca069b2a2a0f75e6"></a>
### Function DpfVector

![][public]

```cpp
ansys::dpf::DpfVector< T >::DpfVector(DpfTypes const &for_object)
```







**Parameters**:

* [DpfTypes](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes) const & **for_object**

**Return type**: 

<a id="classansys_1_1dpf_1_1DpfVector_1ad6c298a240c1d771cd35863b08221f0b"></a>
### Function DpfVector

![][public]

```cpp
ansys::dpf::DpfVector< T >::DpfVector(LibraryHandle const &library_handle)
```







**Parameters**:

* [LibraryHandle](classansys_1_1dpf_1_1LibraryHandle.md#classansys_1_1dpf_1_1LibraryHandle) const & **library_handle**

**Return type**: 

<a id="classansys_1_1dpf_1_1DpfVector_1a87d680a6d344aab93501db869f76d212"></a>
### Function ~DpfVector

![][public]

```cpp
ansys::dpf::DpfVector< T >::~DpfVector()
```







**Return type**: 

<a id="classansys_1_1dpf_1_1DpfVector_1a26e77263ac8e72cc00383d849793c67c"></a>
### Function DpfVector

![][public]

```cpp
ansys::dpf::DpfVector< T >::DpfVector(DpfVector const &)=delete
```







**Parameters**:

* [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) const &

**Return type**: 

<a id="classansys_1_1dpf_1_1DpfVector_1a861713b25289232791ac9fa25304cbbd"></a>
### Function DpfVector

![][public]

```cpp
ansys::dpf::DpfVector< T >::DpfVector(DpfVector &&)
```







**Parameters**:

* rhs[DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) &&

**Return type**: 

<a id="classansys_1_1dpf_1_1DpfVector_1a4b722e69eb6772eee74d497b243763e0"></a>
### Function operator=

![][public]

```cpp
DpfVector& ansys::dpf::DpfVector< T >::operator=(DpfVector const &)=delete
```







**Parameters**:

* [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) const &

**Return type**: [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) &

<a id="classansys_1_1dpf_1_1DpfVector_1a92dc2ad033a53f618b45600dc4bd091a"></a>
### Function operator=

![][public]

```cpp
DpfVector< T > & ansys::dpf::DpfVector< T >::operator=(DpfVector &&)
```







**Parameters**:

* rhs[DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) &&

**Return type**: [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) &

<a id="classansys_1_1dpf_1_1DpfVector_1adbf45d7edf6c4d39c867cf3259a4842f"></a>
### Function operator[]

![][public]

```cpp
T & ansys::dpf::DpfVector< T >::operator[](dp_index idx)
```







**Parameters**:

* [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) **idx**

**Return type**: T &

<a id="classansys_1_1dpf_1_1DpfVector_1a415f918ff1a4edc082ef4c5ab50e2276"></a>
### Function operator[]

![][public]
![][const]

```cpp
T ansys::dpf::DpfVector< T >::operator[](dp_index idx) const
```







**Parameters**:

* [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) **idx**

**Return type**: T

<a id="classansys_1_1dpf_1_1DpfVector_1a8470a9e4e9231bc076637a4e8a6f8322"></a>
### Function data

![][public]
![][const]

```cpp
T const  *const ansys::dpf::DpfVector< T >::data() const
```







**Return type**: T const  *const

<a id="classansys_1_1dpf_1_1DpfVector_1a3549db7551348bf4c845b777a598b22b"></a>
### Function data

![][public]

```cpp
T *const ansys::dpf::DpfVector< T >::data()
```







**Return type**: T *const

<a id="classansys_1_1dpf_1_1DpfVector_1acb74f526bb5e61fef09605354966ff16"></a>
### Function size

![][public]
![][const]

```cpp
dp_int ansys::dpf::DpfVector< T >::size() const
```



Return the size of the data contained in the [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) object.



**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<a id="classansys_1_1dpf_1_1DpfVector_1a0e5b28ad59e3352941d64e760b688f91"></a>
### Function defined

![][public]
![][const]

```cpp
bool ansys::dpf::DpfVector< T >::defined() const
```



Return an true information if the [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) object has data set.



**Return type**: bool

<a id="classansys_1_1dpf_1_1DpfVector_1a2cc9e64a9e622ee766a5766c2faf85d4"></a>
### Function commit

![][public]
![][const]

```cpp
void ansys::dpf::DpfVector< T >::commit() const
```



Update the data in the object (if the vector is pointing on remote data).



**Return type**: void

<a id="classansys_1_1dpf_1_1DpfVector_1a1a9c97d138baa7c3f00f3e1e80d3572d"></a>
### Function copy

![][public]
![][const]

```cpp
void ansys::dpf::DpfVector< T >::copy(std::vector< T > &to_fill) const
```







**Parameters**:

* std::vector< T > & **to_fill**

**Return type**: void

<a id="classansys_1_1dpf_1_1DpfVector_1a31354ff982c53a6e327c7210c2878092"></a>
### Function copy

![][public]
![][const]

```cpp
std::vector< T > ansys::dpf::DpfVector< T >::copy() const
```







**Return type**: std::vector< T >

**TODO**:

* includes {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api_base.h"}]}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)