<a id="classansys_1_1dpf_1_1DpfVector"></a>
# Class ansys::dpf::DpfVector

![][C++]
![][public]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api\_base.h` (line 1354)

Represents a modifiable vector of data and manages its memory.

If the [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) is returned by a local entity, then it's a direct pointer to its data else if the [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) is returned by a remote entity, then it's a copy of the data and the remote data is updated (if necessary) when the [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) is destructed.

**Template parameters**:

* typename T

## Inner classes

* [ansys::dpf::DpfVector::iterator](structansys_1_1dpf_1_1DpfVector_1_1iterator.md#structansys_1_1dpf_1_1DpfVector_1_1iterator)

## Members

* [\_data](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1afc86cb6f43e669c4d4e3eabfa4f5b18f)
* [begin](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1a0c627a2093966cc9aef3b1f488571c09)
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
* [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1ac556da816e3da02228ab52c1e13ee5bd)
* [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1aa443d368ed93a6ccd8be10188ad11e93)
* [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1a670674aaab714a8c63c62976b9be90b3)
* [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1a1f56f040aa9ccb1e38a78d532aa70bdd)
* [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1afac69aecf4a6084088169a284eaa02d4)
* [end](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1ab2aff0738b4fa8b223beed776246b3d3)
* [fill](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1a0f91a7f6075fbf1e53164832fc9adc6e)
* [fill](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1a19abf97019e8ea15dfb9a7e67b4d284b)
* [fill](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1aaf48ee2db06dc38eced85afd80f1bccc)
* [fill](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1a61afbf4d711499ab3e49506abde7f383)
* [fillFunc](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1ad865948302449c2789ac2c836fc3a5b4)
* [fillFuncByInt](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1a40d6740f15bbf968a4271b7d04f3d6c8)
* [fillVoidDataFunc](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1aecdf9d227d3810b2138e80fe2a6e40c7)
* [fillVoidDataFuncByInt](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1a5fbda0c494b964a09226f99d4f79c713)
* [operator=](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1aa1b3d94db49397e944fb55c5b384b461)
* [operator=](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1acde4bf0573de204073368a5703ee0c03)
* [operator[]](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1adbf45d7edf6c4d39c867cf3259a4842f)
* [operator[]](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1a415f918ff1a4edc082ef4c5ab50e2276)
* [reset](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1ad6a4b21b02e43e7e139f59f00b184bbc)
* [size](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1acb74f526bb5e61fef09605354966ff16)
* [~DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector_1a87d680a6d344aab93501db869f76d212)

## Private types

<a id="classansys_1_1dpf_1_1DpfVector_1a40d6740f15bbf968a4271b7d04f3d6c8"></a>
### Typedef fillFuncByInt

![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api\_base.h` (line 1370)


```cpp
typedef void(* ansys::dpf::DpfVector< T >::fillFuncByInt) (opaque::DpfObject const  *const obj, opaque::DpfVector *, T **, int *, int, int &, _TCHAR *&)
```








**Return type**: void(*

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::fillFuncByInt"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_1ad865948302449c2789ac2c836fc3a5b4"></a>
### Typedef fillFunc

![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api\_base.h` (line 1371)


```cpp
typedef void(* ansys::dpf::DpfVector< T >::fillFunc) (opaque::DpfObject const  *const obj, opaque::DpfVector *, T **, int *, int &, _TCHAR *&)
```








**Return type**: void(*

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::fillFunc"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_1a5fbda0c494b964a09226f99d4f79c713"></a>
### Typedef fillVoidDataFuncByInt

![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api\_base.h` (line 1372)


```cpp
typedef void(* ansys::dpf::DpfVector< T >::fillVoidDataFuncByInt) (opaque::DpfObject const  *const obj, opaque::DpfVector *, void **, int *, int, int &, _TCHAR *&)
```








**Return type**: void(*

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::fillVoidDataFuncByInt"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_1aecdf9d227d3810b2138e80fe2a6e40c7"></a>
### Typedef fillVoidDataFunc

![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api\_base.h` (line 1373)


```cpp
typedef void(* ansys::dpf::DpfVector< T >::fillVoidDataFunc) (opaque::DpfObject const  *const obj, opaque::DpfVector *, void **, int *, int &, _TCHAR *&)
```








**Return type**: void(*

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::fillVoidDataFunc"}]}`
-->

## Friends

<a id="classansys_1_1dpf_1_1DpfVector_1aaec47a26a3c11c1debd3ed922b69cbd2"></a>
### Friend Field

![][C++]
![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api\_base.h` (line 1359)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Field"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::Field"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"Field"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_1abb4aa5a7ed62b741f0b146a257d0fe5e"></a>
### Friend PropertyField

![][C++]
![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api\_base.h` (line 1360)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class PropertyField"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::PropertyField"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"PropertyField"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_1ad19b1aa2f28448bd897fc6c5dd771f02"></a>
### Friend CustomTypeField

![][C++]
![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api\_base.h` (line 1361)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class CustomTypeField"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::CustomTypeField"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"CustomTypeField"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_1a5640574bd4988f2739826c3f2f273de5"></a>
### Friend StringField

![][C++]
![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api\_base.h` (line 1362)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class StringField"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::StringField"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"StringField"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_1ad79d4cf6207e0f288cb6275512b0d4ec"></a>
### Friend Scoping

![][C++]
![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api\_base.h` (line 1363)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Scoping"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::Scoping"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"Scoping"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_1a33ff3f826991522d2e77c1c523f33e19"></a>
### Friend Operator

![][C++]
![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api\_base.h` (line 1364)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Operator"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::Operator"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"Operator"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_1afa07847c7cb432b260e61a0c18025ba3"></a>
### Friend Workflow

![][C++]
![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api\_base.h` (line 1365)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Workflow"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::Workflow"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"Workflow"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_1a9820c685b67a3355c042bb0b3365d9e2"></a>
### Friend Any

![][C++]
![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api\_base.h` (line 1366)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Any"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::Any"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"Any"}]},{"type":"text","text":"\n        "}]}`
-->

## Private attributes

<a id="classansys_1_1dpf_1_1DpfVector_1afc86cb6f43e669c4d4e3eabfa4f5b18f"></a>
### Variable \_data

![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api\_base.h` (line 1368)


```cpp
DpfVectorData<T>* ansys::dpf::DpfVector< T >::_data = nullptr
```








**Type**: DpfVectorData< T > *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::_data"}]}`
-->

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

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::DpfVector"}]}`
-->

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

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::DpfVector"}]}`
-->

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

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::DpfVector"}]}`
-->

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

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::DpfVector"}]}`
-->

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

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::fill"}]}`
-->

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

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::fill"}]}`
-->

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

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::fill"}]}`
-->

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

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::fill"}]}`
-->

## Public functions

<a id="classansys_1_1dpf_1_1DpfVector_1a762b4ce9bc3f7035f3c5a3f27e6dc7ad"></a>
### Function DpfVector

![][public]


```cpp
ansys::dpf::DpfVector< T >::DpfVector()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::DpfVector"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_1ac556da816e3da02228ab52c1e13ee5bd"></a>
### Function DpfVector

![][public]


```cpp
ansys::dpf::DpfVector< T >::DpfVector(Client const *const for_object)
```








**Parameters**:

* [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **for_object**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::DpfVector"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_1aa443d368ed93a6ccd8be10188ad11e93"></a>
### Function DpfVector

![][public]


```cpp
ansys::dpf::DpfVector< T >::DpfVector(Client const &for_object)
```








**Parameters**:

* [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const & **for_object**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::DpfVector"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_1a670674aaab714a8c63c62976b9be90b3"></a>
### Function DpfVector

![][public]


```cpp
ansys::dpf::DpfVector< T >::DpfVector(iterator const &begin, iterator const &end)
```


Creates a vector from a range of an other vector (range from begin to end).

Copyless constructor: the new vector is created with a reference on the same data as begin and end: modifying the new vector data, will also modify the initial vector.



**Parameters**:

* iterator const & **begin**
* iterator const & **end**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::DpfVector"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_1a87d680a6d344aab93501db869f76d212"></a>
### Function ~DpfVector

![][public]


```cpp
ansys::dpf::DpfVector< T >::~DpfVector()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::~DpfVector"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_1a1f56f040aa9ccb1e38a78d532aa70bdd"></a>
### Function DpfVector

![][public]


```cpp
ansys::dpf::DpfVector< T >::DpfVector(DpfVector const &)
```








**Parameters**:

* rhsDpfVector const &

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::DpfVector"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_1afac69aecf4a6084088169a284eaa02d4"></a>
### Function DpfVector

![][public]


```cpp
ansys::dpf::DpfVector< T >::DpfVector(DpfVector &&) noexcept
```








**Parameters**:

* rhsDpfVector &&

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::DpfVector"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_1aa1b3d94db49397e944fb55c5b384b461"></a>
### Function operator=

![][public]


```cpp
DpfVector< T > & ansys::dpf::DpfVector< T >::operator=(DpfVector const &)
```








**Parameters**:

* rhsDpfVector const &

**Return type**: DpfVector &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::operator="}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_1acde4bf0573de204073368a5703ee0c03"></a>
### Function operator=

![][public]


```cpp
DpfVector< T > & ansys::dpf::DpfVector< T >::operator=(DpfVector &&) noexcept
```








**Parameters**:

* rhsDpfVector &&

**Return type**: DpfVector &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::operator="}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_1adbf45d7edf6c4d39c867cf3259a4842f"></a>
### Function operator[]

![][public]


```cpp
T & ansys::dpf::DpfVector< T >::operator[](dp_index idx)
```








**Parameters**:

* [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) **idx**

**Return type**: T &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::operator[]"}]}`
-->

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

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::operator[]"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_1a8470a9e4e9231bc076637a4e8a6f8322"></a>
### Function data

![][public]
![][const]


```cpp
T const  *const ansys::dpf::DpfVector< T >::data() const
```








**Return type**: T const *const

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::data"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_1a3549db7551348bf4c845b777a598b22b"></a>
### Function data

![][public]


```cpp
T *const ansys::dpf::DpfVector< T >::data()
```








**Return type**: T *const

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::data"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_1acb74f526bb5e61fef09605354966ff16"></a>
### Function size

![][public]
![][const]


```cpp
dp_int ansys::dpf::DpfVector< T >::size() const
```




Return the size of the data contained in the [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) object.



**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::size"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_1a0e5b28ad59e3352941d64e760b688f91"></a>
### Function defined

![][public]
![][const]


```cpp
bool ansys::dpf::DpfVector< T >::defined() const
```




Return an true information if the [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) object has data set.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::defined"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_1a2cc9e64a9e622ee766a5766c2faf85d4"></a>
### Function commit

![][public]
![][const]


```cpp
void ansys::dpf::DpfVector< T >::commit() const
```




Update the data in the object (if the vector is pointing on remote data).



**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::commit"}]}`
-->

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

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::copy"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_1a31354ff982c53a6e327c7210c2878092"></a>
### Function copy

![][public]
![][const]


```cpp
std::vector< T > ansys::dpf::DpfVector< T >::copy() const
```








**Return type**: std::vector< T >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::copy"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_1a0c627a2093966cc9aef3b1f488571c09"></a>
### Function begin

![][public]
![][const]


```cpp
iterator ansys::dpf::DpfVector< T >::begin() const
```








**Return type**: iterator

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::begin"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_1ab2aff0738b4fa8b223beed776246b3d3"></a>
### Function end

![][public]
![][const]


```cpp
iterator ansys::dpf::DpfVector< T >::end() const
```








**Return type**: iterator

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::end"}]}`
-->

<a id="classansys_1_1dpf_1_1DpfVector_1ad6a4b21b02e43e7e139f59f00b184bbc"></a>
### Function reset

![][public]


```cpp
void ansys::dpf::DpfVector< T >::reset(iterator const &begin, iterator const &end)
```


Reinitialize the data with a range of an other vector (range from begin to end).

Copyless: the new data is created with a reference on the same data as begin and end: modifying the new vector data, will also modify the initial vector.



**Parameters**:

* iterator const & **begin**
* iterator const & **end**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::reset"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api_base.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)