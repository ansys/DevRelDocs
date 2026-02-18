# Class ansys::dpf::DpfVector

<a id="classansys-dpf-dpfvector"></a>

![][C++]
![][public]

Represents a modifiable vector of data and manages its memory.

If the [DpfVector](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector) is returned by a local entity, then it's a direct pointer to its data else if the [DpfVector](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector) is returned by a remote entity, then it's a copy of the data and the remote data is updated (if necessary) when the [DpfVector](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector) is destructed.

**Template parameters**:

* typename T

## Inner classes

* [ansys::dpf::DpfVector::iterator](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator)

## Members

* [begin](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector-1a0c627a2093966cc9aef3b1f488571c09)
* [commit](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector-1a2cc9e64a9e622ee766a5766c2faf85d4)
* [copy](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector-1a1a9c97d138baa7c3f00f3e1e80d3572d)
* [copy](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector-1a31354ff982c53a6e327c7210c2878092)
* [data](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector-1a8470a9e4e9231bc076637a4e8a6f8322)
* [data](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector-1a3549db7551348bf4c845b777a598b22b)
* [defined](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector-1a0e5b28ad59e3352941d64e760b688f91)
* [DpfVector](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector-1a762b4ce9bc3f7035f3c5a3f27e6dc7ad)
* [DpfVector](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector-1ac556da816e3da02228ab52c1e13ee5bd)
* [DpfVector](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector-1aa443d368ed93a6ccd8be10188ad11e93)
* [DpfVector](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector-1a670674aaab714a8c63c62976b9be90b3)
* [DpfVector](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector-1a1f56f040aa9ccb1e38a78d532aa70bdd)
* [DpfVector](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector-1afac69aecf4a6084088169a284eaa02d4)
* [end](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector-1ab2aff0738b4fa8b223beed776246b3d3)
* [operator=](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector-1aa1b3d94db49397e944fb55c5b384b461)
* [operator=](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector-1acde4bf0573de204073368a5703ee0c03)
* [operator[]](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector-1adbf45d7edf6c4d39c867cf3259a4842f)
* [operator[]](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector-1a415f918ff1a4edc082ef4c5ab50e2276)
* [reset](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector-1ad6a4b21b02e43e7e139f59f00b184bbc)
* [size](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector-1acb74f526bb5e61fef09605354966ff16)
* [~DpfVector](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector-1a87d680a6d344aab93501db869f76d212)

## Friends

## Public functions

<a id="classansys-dpf-dpfvector-1a762b4ce9bc3f7035f3c5a3f27e6dc7ad"></a>
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

<a id="classansys-dpf-dpfvector-1ac556da816e3da02228ab52c1e13ee5bd"></a>
### Function DpfVector

![][public]


```cpp
ansys::dpf::DpfVector< T >::DpfVector(Client const *const for_object)
```








**Parameters**:

* [Client](classansys-dpf-client.md#classansys-dpf-client) const *const **for_object**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::DpfVector"}]}`
-->

<a id="classansys-dpf-dpfvector-1aa443d368ed93a6ccd8be10188ad11e93"></a>
### Function DpfVector

![][public]


```cpp
ansys::dpf::DpfVector< T >::DpfVector(Client const &for_object)
```








**Parameters**:

* [Client](classansys-dpf-client.md#classansys-dpf-client) const & **for_object**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::DpfVector"}]}`
-->

<a id="classansys-dpf-dpfvector-1a670674aaab714a8c63c62976b9be90b3"></a>
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

<a id="classansys-dpf-dpfvector-1a87d680a6d344aab93501db869f76d212"></a>
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

<a id="classansys-dpf-dpfvector-1a1f56f040aa9ccb1e38a78d532aa70bdd"></a>
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

<a id="classansys-dpf-dpfvector-1afac69aecf4a6084088169a284eaa02d4"></a>
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

<a id="classansys-dpf-dpfvector-1aa1b3d94db49397e944fb55c5b384b461"></a>
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

<a id="classansys-dpf-dpfvector-1acde4bf0573de204073368a5703ee0c03"></a>
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

<a id="classansys-dpf-dpfvector-1adbf45d7edf6c4d39c867cf3259a4842f"></a>
### Function operator[]

![][public]


```cpp
T & ansys::dpf::DpfVector< T >::operator[](dp_index idx)
```








**Parameters**:

* [dp\_index](namespaceansys-dpf.md#namespaceansys-dpf-1a417548d1b705a9ba54ba9429afe68920) **idx**

**Return type**: T &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::operator[]"}]}`
-->

<a id="classansys-dpf-dpfvector-1a415f918ff1a4edc082ef4c5ab50e2276"></a>
### Function operator[]

![][public]
![][const]


```cpp
T ansys::dpf::DpfVector< T >::operator[](dp_index idx) const
```








**Parameters**:

* [dp\_index](namespaceansys-dpf.md#namespaceansys-dpf-1a417548d1b705a9ba54ba9429afe68920) **idx**

**Return type**: T

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::operator[]"}]}`
-->

<a id="classansys-dpf-dpfvector-1a8470a9e4e9231bc076637a4e8a6f8322"></a>
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

<a id="classansys-dpf-dpfvector-1a3549db7551348bf4c845b777a598b22b"></a>
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

<a id="classansys-dpf-dpfvector-1acb74f526bb5e61fef09605354966ff16"></a>
### Function size

![][public]
![][const]


```cpp
dp_int ansys::dpf::DpfVector< T >::size() const
```




Return the size of the data contained in the [DpfVector](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector) object.



**Return type**: [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::size"}]}`
-->

<a id="classansys-dpf-dpfvector-1a0e5b28ad59e3352941d64e760b688f91"></a>
### Function defined

![][public]
![][const]


```cpp
bool ansys::dpf::DpfVector< T >::defined() const
```




Return an true information if the [DpfVector](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector) object has data set.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::defined"}]}`
-->

<a id="classansys-dpf-dpfvector-1a2cc9e64a9e622ee766a5766c2faf85d4"></a>
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

<a id="classansys-dpf-dpfvector-1a1a9c97d138baa7c3f00f3e1e80d3572d"></a>
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

<a id="classansys-dpf-dpfvector-1a31354ff982c53a6e327c7210c2878092"></a>
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

<a id="classansys-dpf-dpfvector-1a0c627a2093966cc9aef3b1f488571c09"></a>
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

<a id="classansys-dpf-dpfvector-1ab2aff0738b4fa8b223beed776246b3d3"></a>
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

<a id="classansys-dpf-dpfvector-1ad6a4b21b02e43e7e139f59f00b184bbc"></a>
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
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)