# Class ansys::dpf::DpfVector\< std::string \>

<a id="classansys-dpf-dpfvector-std-string-4"></a>

![][C++]
![][public]

Represents a modifiable vector of data and manages its memory.

If the [DpfVector](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector) is returned by a local entity, then it's a direct pointer to its data else if the [DpfVector](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector) is returned by a remote entity, then it's a copy of the data and the remote data is updated (if necessary) when the [DpfVector](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector) is destructed.



## Members

* [begin](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector-1a0c627a2093966cc9aef3b1f488571c09)
* [commit](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector-1a2cc9e64a9e622ee766a5766c2faf85d4)
* [copy](classansys-dpf-dpfvector-std-string.md#classansys-dpf-dpfvector-std-string-4-1aa05689f762f50261d089ffa487dc9361)
* [copy](classansys-dpf-dpfvector-std-string.md#classansys-dpf-dpfvector-std-string-4-1a18220ac80c9aaddd3de1288ab29296f6)
* [data](classansys-dpf-dpfvector-std-string.md#classansys-dpf-dpfvector-std-string-4-1afbe78e3c9d22168b7af99c7096ef696b)
* [defined](classansys-dpf-dpfvector-std-string.md#classansys-dpf-dpfvector-std-string-4-1a1a5660a40d27752e8ecf9d901e8fb1c6)
* [DpfVector](classansys-dpf-dpfvector-std-string.md#classansys-dpf-dpfvector-std-string-4-1a3d896a4c388a8b5929e2cbea5403cdf0)
* [DpfVector](classansys-dpf-dpfvector-std-string.md#classansys-dpf-dpfvector-std-string-4-1a3f22bafefe577a577ca1922b7f01494b)
* [DpfVector](classansys-dpf-dpfvector-std-string.md#classansys-dpf-dpfvector-std-string-4-1aef8136509e2979b349120c1ad9dabbfa)
* [DpfVector](classansys-dpf-dpfvector-std-string.md#classansys-dpf-dpfvector-std-string-4-1a8122bb5ba23d302c236ffb3dfdfb5ffd)
* [end](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector-1ab2aff0738b4fa8b223beed776246b3d3)
* [operator=](classansys-dpf-dpfvector-std-string.md#classansys-dpf-dpfvector-std-string-4-1ac0fbd4432b0c2f71e54e0a8c09261f53)
* [operator=](classansys-dpf-dpfvector-std-string.md#classansys-dpf-dpfvector-std-string-4-1a1da44cb6b9c8d1c9b329de281b1ecf4a)
* [operator[]](classansys-dpf-dpfvector-std-string.md#classansys-dpf-dpfvector-std-string-4-1abf7bb24b1472d59bf762ec0a17d3206b)
* [reset](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector-1ad6a4b21b02e43e7e139f59f00b184bbc)
* [size](classansys-dpf-dpfvector-std-string.md#classansys-dpf-dpfvector-std-string-4-1a156b0cca472bfe35a025915e3b09c7d7)
* [~DpfVector](classansys-dpf-dpfvector-std-string.md#classansys-dpf-dpfvector-std-string-4-1a5d7b660c69b99f2a44322da6690b9676)

## Friends

## Public functions

<a id="classansys-dpf-dpfvector-std-string-4-1a3d896a4c388a8b5929e2cbea5403cdf0"></a>
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

<a id="classansys-dpf-dpfvector-std-string-4-1a3f22bafefe577a577ca1922b7f01494b"></a>
### Function DpfVector

![][public]


```cpp
ansys::dpf::DpfVector< std::string >::DpfVector(DpfTypes const &for_object)
```








**Parameters**:

* [DpfTypes](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes) const & **for_object**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector< std::string >::DpfVector"}]}`
-->

<a id="classansys-dpf-dpfvector-std-string-4-1a5d7b660c69b99f2a44322da6690b9676"></a>
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

<a id="classansys-dpf-dpfvector-std-string-4-1aef8136509e2979b349120c1ad9dabbfa"></a>
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

<a id="classansys-dpf-dpfvector-std-string-4-1a8122bb5ba23d302c236ffb3dfdfb5ffd"></a>
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

<a id="classansys-dpf-dpfvector-std-string-4-1ac0fbd4432b0c2f71e54e0a8c09261f53"></a>
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

<a id="classansys-dpf-dpfvector-std-string-4-1a1da44cb6b9c8d1c9b329de281b1ecf4a"></a>
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

<a id="classansys-dpf-dpfvector-std-string-4-1abf7bb24b1472d59bf762ec0a17d3206b"></a>
### Function operator[]

![][public]
![][const]


```cpp
std::string ansys::dpf::DpfVector< std::string >::operator[](dp_index idx) const
```








**Parameters**:

* [dp_index](namespaceansys-dpf.md#namespaceansys-dpf-1a417548d1b705a9ba54ba9429afe68920) **idx**

**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector< std::string >::operator[]"}]}`
-->

<a id="classansys-dpf-dpfvector-std-string-4-1afbe78e3c9d22168b7af99c7096ef696b"></a>
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

<a id="classansys-dpf-dpfvector-std-string-4-1a156b0cca472bfe35a025915e3b09c7d7"></a>
### Function size

![][public]
![][const]


```cpp
dp_int ansys::dpf::DpfVector< std::string >::size() const
```




Return the size of the data contained in the [DpfVector](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector) object.



**Return type**: [dp_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector< std::string >::size"}]}`
-->

<a id="classansys-dpf-dpfvector-std-string-4-1a1a5660a40d27752e8ecf9d901e8fb1c6"></a>
### Function defined

![][public]
![][const]


```cpp
bool ansys::dpf::DpfVector< std::string >::defined() const
```




Return an true information if the [DpfVector](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector) object has data set.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector< std::string >::defined"}]}`
-->

<a id="classansys-dpf-dpfvector-std-string-4-1aa05689f762f50261d089ffa487dc9361"></a>
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

<a id="classansys-dpf-dpfvector-std-string-4-1a18220ac80c9aaddd3de1288ab29296f6"></a>
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

<a id="classansys-dpf-dpfvector-1a2cc9e64a9e622ee766a5766c2faf85d4"></a>
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

<a id="classansys-dpf-dpfvector-1a0c627a2093966cc9aef3b1f488571c09"></a>
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

<a id="classansys-dpf-dpfvector-1ab2aff0738b4fa8b223beed776246b3d3"></a>
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

<a id="classansys-dpf-dpfvector-1ad6a4b21b02e43e7e139f59f00b184bbc"></a>
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

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)