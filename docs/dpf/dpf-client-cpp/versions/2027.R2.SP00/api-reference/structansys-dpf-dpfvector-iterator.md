# Structure ansys::dpf::DpfVector::iterator

<a id="structansys-dpf-dpfvector-iterator"></a>

![][C++]
![][public]

Random access iterator over contiguous data.

Thin pointer-based iterator providing STL-compatible random access iteration. Not thread safe: the caller must ensure only one thread owns the iterator at a time.

## Members

* [difference_type](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator-1af9b1bcb76a762d48fcb08813c9bee821)
* [getIndex](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator-1aa5a8937cf9b30b4e877cd89d4f04be7b)
* [index_type](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator-1a63ba4846aa8efc7342860bb6abd95c30)
* [iterator](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator-1a9cdfc43fb8670b7e8cc6a8e6c228b2b4)
* [iterator](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator-1a8fbdb64d3b3ba3ec725836bbffcfcf7f)
* [iterator_category](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator-1a7c9fe16ee2d2d48b06230c761faf988c)
* [operator!=](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator-1a9e6d7c0a46594f7de14641bde2a463ec)
* [operator*](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator-1a4072330935b9093a9afe71942405bd5a)
* [operator+](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator-1a5f9a013ba7965568a3bc08b74b83afd4)
* [operator++](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator-1aa1dbb813028cb88a9776380665dd3127)
* [operator++](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator-1ac9c83b44e5e0151f98b0327d2a118693)
* [operator+=](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator-1a17c6908ed521824189ab4a42e2c4ae10)
* [operator-](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator-1a688e3a75740d1d570375302da8ec9986)
* [operator-](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator-1a95fe6dc9b62befdad7b08f8f1cf39c97)
* [operator--](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator-1ad7b223cde9177e8e916e3d324a06fb25)
* [operator--](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator-1a4b435edd4925714455646289d0b410a0)
* [operator-=](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator-1ac7e455de4fc429351e37acfd4ae66466)
* [operator-\>](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator-1a1fbc3f9e8839274a32815af292656b1d)
* [operator\<](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator-1a66243813b8518cc8954bc9665088681e)
* [operator\<=](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator-1a412315e6b4da3e13d16a1f2e48e08b36)
* [operator==](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator-1a703b889c39b5ac2d8299043962e32d92)
* [operator\>](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator-1afa7690572cd37e4f6b233e8b31ada56b)
* [operator\>=](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator-1a160dfc0d8fbcf94f03bfb46fa1178912)
* [operator[]](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator-1abcf84a76879913b8c6e52d80490a59bb)
* [pointer](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator-1af1579be2ea26b6235a615f935c8f1359)
* [reference](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator-1a5942362976b46101d148b0e3df64e13c)
* [value_type](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator-1a958e79ca78fe418883ae448359f44812)

## Public types

<a id="structansys-dpf-dpfvector-iterator-1a63ba4846aa8efc7342860bb6abd95c30"></a>
### Typedef index_type

![][public]


```cpp
using ansys::dpf::DpfVector< T >::iterator::index_type =  size_t
```








**Return type**: size_t

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::iterator::index_type"}]}`
-->

<a id="structansys-dpf-dpfvector-iterator-1af9b1bcb76a762d48fcb08813c9bee821"></a>
### Typedef difference_type

![][public]


```cpp
using ansys::dpf::DpfVector< T >::iterator::difference_type =  std::ptrdiff_t
```








**Return type**: std::ptrdiff_t

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::iterator::difference_type"}]}`
-->

<a id="structansys-dpf-dpfvector-iterator-1af1579be2ea26b6235a615f935c8f1359"></a>
### Typedef pointer

![][public]


```cpp
using ansys::dpf::DpfVector< T >::iterator::pointer =  T*
```








**Return type**: T *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::iterator::pointer"}]}`
-->

<a id="structansys-dpf-dpfvector-iterator-1a5942362976b46101d148b0e3df64e13c"></a>
### Typedef reference

![][public]


```cpp
using ansys::dpf::DpfVector< T >::iterator::reference =  T&
```








**Return type**: T &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::iterator::reference"}]}`
-->

<a id="structansys-dpf-dpfvector-iterator-1a958e79ca78fe418883ae448359f44812"></a>
### Typedef value_type

![][public]


```cpp
using ansys::dpf::DpfVector< T >::iterator::value_type =  T
```








**Return type**: T

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::iterator::value_type"}]}`
-->

<a id="structansys-dpf-dpfvector-iterator-1a7c9fe16ee2d2d48b06230c761faf988c"></a>
### Typedef iterator_category

![][public]


```cpp
using ansys::dpf::DpfVector< T >::iterator::iterator_category =  std::random_access_iterator_tag
```








**Return type**: std::random_access_iterator_tag

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::iterator::iterator_category"}]}`
-->

## Friends

<a id="structansys-dpf-dpfvector-iterator-1a72cf1c048e68fb0b7fa10dc2926867d2"></a>
### Friend DpfVector

![][C++]
![][public]







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class DpfVector"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::iterator::DpfVector"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classansys_1_1dpf_1_1DpfVector"},"children":[{"type":"text","text":"DpfVector"}]}]},{"type":"text","text":"\n        "}]}`
-->

## Public functions

<a id="structansys-dpf-dpfvector-iterator-1a9cdfc43fb8670b7e8cc6a8e6c228b2b4"></a>
### Function iterator

![][public]


```cpp
ansys::dpf::DpfVector< T >::iterator::iterator()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::iterator::iterator"}]}`
-->

<a id="structansys-dpf-dpfvector-iterator-1a8fbdb64d3b3ba3ec725836bbffcfcf7f"></a>
### Function iterator

![][public]


```cpp
ansys::dpf::DpfVector< T >::iterator::iterator(index_type index, DpfVectorData< T > *data)
```








**Parameters**:

* index_type **index**
* DpfVectorData< T > * **data**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::iterator::iterator"}]}`
-->

<a id="structansys-dpf-dpfvector-iterator-1a66243813b8518cc8954bc9665088681e"></a>
### Function operator\<

![][public]
![][const]


```cpp
bool ansys::dpf::DpfVector< T >::iterator::operator<(const iterator &other) const
```








**Parameters**:

* const [iterator](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator) & **other**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::iterator::operator<"}]}`
-->

<a id="structansys-dpf-dpfvector-iterator-1afa7690572cd37e4f6b233e8b31ada56b"></a>
### Function operator\>

![][public]
![][const]


```cpp
bool ansys::dpf::DpfVector< T >::iterator::operator>(const iterator &other) const
```








**Parameters**:

* const [iterator](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator) & **other**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::iterator::operator>"}]}`
-->

<a id="structansys-dpf-dpfvector-iterator-1a412315e6b4da3e13d16a1f2e48e08b36"></a>
### Function operator\<=

![][public]
![][const]


```cpp
bool ansys::dpf::DpfVector< T >::iterator::operator<=(const iterator &other) const
```








**Parameters**:

* const [iterator](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator) & **other**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::iterator::operator<="}]}`
-->

<a id="structansys-dpf-dpfvector-iterator-1a160dfc0d8fbcf94f03bfb46fa1178912"></a>
### Function operator\>=

![][public]
![][const]


```cpp
bool ansys::dpf::DpfVector< T >::iterator::operator>=(const iterator &other) const
```








**Parameters**:

* const [iterator](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator) & **other**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::iterator::operator>="}]}`
-->

<a id="structansys-dpf-dpfvector-iterator-1a703b889c39b5ac2d8299043962e32d92"></a>
### Function operator==

![][public]
![][const]


```cpp
bool ansys::dpf::DpfVector< T >::iterator::operator==(const iterator &other) const
```








**Parameters**:

* const [iterator](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator) & **other**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::iterator::operator=="}]}`
-->

<a id="structansys-dpf-dpfvector-iterator-1a9e6d7c0a46594f7de14641bde2a463ec"></a>
### Function operator!=

![][public]
![][const]


```cpp
bool ansys::dpf::DpfVector< T >::iterator::operator!=(const iterator &other) const
```








**Parameters**:

* const [iterator](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator) & **other**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::iterator::operator!="}]}`
-->

<a id="structansys-dpf-dpfvector-iterator-1aa1dbb813028cb88a9776380665dd3127"></a>
### Function operator++

![][public]


```cpp
iterator & ansys::dpf::DpfVector< T >::iterator::operator++()
```








**Return type**: [iterator](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::iterator::operator++"}]}`
-->

<a id="structansys-dpf-dpfvector-iterator-1ac9c83b44e5e0151f98b0327d2a118693"></a>
### Function operator++

![][public]


```cpp
iterator ansys::dpf::DpfVector< T >::iterator::operator++(int)
```








**Parameters**:

* int

**Return type**: [iterator](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::iterator::operator++"}]}`
-->

<a id="structansys-dpf-dpfvector-iterator-1ad7b223cde9177e8e916e3d324a06fb25"></a>
### Function operator--

![][public]


```cpp
iterator & ansys::dpf::DpfVector< T >::iterator::operator--()
```








**Return type**: [iterator](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::iterator::operator--"}]}`
-->

<a id="structansys-dpf-dpfvector-iterator-1a4b435edd4925714455646289d0b410a0"></a>
### Function operator--

![][public]


```cpp
iterator ansys::dpf::DpfVector< T >::iterator::operator--(int)
```








**Parameters**:

* int

**Return type**: [iterator](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::iterator::operator--"}]}`
-->

<a id="structansys-dpf-dpfvector-iterator-1a17c6908ed521824189ab4a42e2c4ae10"></a>
### Function operator+=

![][public]


```cpp
iterator & ansys::dpf::DpfVector< T >::iterator::operator+=(difference_type n)
```








**Parameters**:

* difference_type **n**

**Return type**: [iterator](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::iterator::operator+="}]}`
-->

<a id="structansys-dpf-dpfvector-iterator-1ac7e455de4fc429351e37acfd4ae66466"></a>
### Function operator-=

![][public]


```cpp
iterator & ansys::dpf::DpfVector< T >::iterator::operator-=(difference_type n)
```








**Parameters**:

* difference_type **n**

**Return type**: [iterator](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::iterator::operator-="}]}`
-->

<a id="structansys-dpf-dpfvector-iterator-1a5f9a013ba7965568a3bc08b74b83afd4"></a>
### Function operator+

![][public]
![][const]


```cpp
iterator ansys::dpf::DpfVector< T >::iterator::operator+(difference_type n) const
```








**Parameters**:

* difference_type **n**

**Return type**: [iterator](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::iterator::operator+"}]}`
-->

<a id="structansys-dpf-dpfvector-iterator-1a688e3a75740d1d570375302da8ec9986"></a>
### Function operator-

![][public]
![][const]


```cpp
iterator ansys::dpf::DpfVector< T >::iterator::operator-(difference_type n) const
```








**Parameters**:

* difference_type **n**

**Return type**: [iterator](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::iterator::operator-"}]}`
-->

<a id="structansys-dpf-dpfvector-iterator-1a95fe6dc9b62befdad7b08f8f1cf39c97"></a>
### Function operator-

![][public]
![][const]


```cpp
difference_type ansys::dpf::DpfVector< T >::iterator::operator-(const iterator &other) const
```








**Parameters**:

* const [iterator](structansys-dpf-dpfvector-iterator.md#structansys-dpf-dpfvector-iterator) & **other**

**Return type**: difference_type

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::iterator::operator-"}]}`
-->

<a id="structansys-dpf-dpfvector-iterator-1a4072330935b9093a9afe71942405bd5a"></a>
### Function operator*

![][public]
![][const]


```cpp
reference ansys::dpf::DpfVector< T >::iterator::operator*() const
```








**Return type**: reference

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::iterator::operator*"}]}`
-->

<a id="structansys-dpf-dpfvector-iterator-1a1fbc3f9e8839274a32815af292656b1d"></a>
### Function operator-\>

![][public]
![][const]


```cpp
const pointer ansys::dpf::DpfVector< T >::iterator::operator->() const
```








**Return type**: const pointer

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::iterator::operator->"}]}`
-->

<a id="structansys-dpf-dpfvector-iterator-1abcf84a76879913b8c6e52d80490a59bb"></a>
### Function operator[]

![][public]
![][const]


```cpp
reference ansys::dpf::DpfVector< T >::iterator::operator[](difference_type n) const
```








**Parameters**:

* difference_type **n**

**Return type**: reference

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::iterator::operator[]"}]}`
-->

<a id="structansys-dpf-dpfvector-iterator-1aa5a8937cf9b30b4e877cd89d4f04be7b"></a>
### Function getIndex

![][public]
![][const]


```cpp
dp_index ansys::dpf::DpfVector< T >::iterator::getIndex() const
```


Retrieve the current index of the iterator.





**Return type**: [dp_index](namespaceansys-dpf.md#namespaceansys-dpf-1a417548d1b705a9ba54ba9429afe68920)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVector::iterator::getIndex"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)