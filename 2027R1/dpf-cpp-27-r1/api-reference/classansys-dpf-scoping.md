# Class ansys::dpf::Scoping

<a id="classansys-dpf-scoping"></a>

![][C++]
![][public]

Define a set of entities by [ids](classansys-dpf-scoping.md#classansys-dpf-scoping-1acf26749e29d9f23de6c70806ccfaea6b).

The scoping is entities ids representing a subset of the model's support. Typically, scoping can represent node ids, element ids, time steps, frequencies, joints... Its location indicates what kind of entity the scoping is referring to. Scopings are used to identify the entities where a field is scoped or to choose (through an input pin) a subset on which an operator should compute its result.

**Inherits from**:

* [ansys::dpf::DpfTypes](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes)

## Members

* [at](classansys-dpf-scoping.md#classansys-dpf-scoping-1a0fc75ac65a5b13727b77e2c155828ccd)
* [callAPI](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1aea34d37e0c080126eff70db34bf46597)
* [deep\_copy](classansys-dpf-scoping.md#classansys-dpf-scoping-1a6abd0899c21554c8babd5985710edadc)
* [describe](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a9977945710983bc03d2940fa007847b2)
* [emplace](classansys-dpf-scoping.md#classansys-dpf-scoping-1a94f0dd35d07efdc472ef072b42f9cfda)
* [empty](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a39cd546c42518e2332be8f287db95459)
* [emptyScoping](classansys-dpf-scoping.md#classansys-dpf-scoping-1a5c2fcf31c8714d27cec3455a94552650)
* [getClient](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a968afd9daa0b0f13b65a2ac61369d73a)
* [getHash](classansys-dpf-scoping.md#classansys-dpf-scoping-1a860cdcd91dc058236d1769fa6b880533)
* [getIds](classansys-dpf-scoping.md#classansys-dpf-scoping-1a7377823a48ee69e439a8589627c5e6c0)
* [hasBeenMovedLocally](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a1a5634202c15404b6b24e8f50e51cb66)
* [hashIds](classansys-dpf-scoping.md#classansys-dpf-scoping-1a0b2cb58e52e98cd3e3a97c5fd8889e8b)
* [hasInternalObject](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1ae198f89868d85c7db6dc1a934a1d3c15)
* [idByIndex](classansys-dpf-scoping.md#classansys-dpf-scoping-1ae35e47f2cceccf7ad9ed4590bd10ff89)
* [identicalPointers](classansys-dpf-scoping.md#classansys-dpf-scoping-1a5666c29a9074bd286801882ed3105de1)
* [ids](classansys-dpf-scoping.md#classansys-dpf-scoping-1acf26749e29d9f23de6c70806ccfaea6b)
* [ids](classansys-dpf-scoping.md#classansys-dpf-scoping-1a14dbd1c25bbfc1c3a3dc3ab9b5762d8c)
* [indexById](classansys-dpf-scoping.md#classansys-dpf-scoping-1ab80b20d56d63ce48c08ce6b7428e06c2)
* [isOnCommonAPI](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a9f9789ff61cc9d400a2a344830706b73)
* [isSameObject](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1aa64d5f8fcd7d85ad6ebf708494dbefd7)
* [location](classansys-dpf-scoping.md#classansys-dpf-scoping-1a516b4489a94ff02ecc880f170b8f93a9)
* [operator=](classansys-dpf-scoping.md#classansys-dpf-scoping-1af6234c489fca21ae452862aa318bc725)
* [operator=](classansys-dpf-scoping.md#classansys-dpf-scoping-1afc257d442c28fa0bed7e8967f630e24f)
* [reserve](classansys-dpf-scoping.md#classansys-dpf-scoping-1a6b57f31ddd1d7f0b33451cb374ff3fb1)
* [resize](classansys-dpf-scoping.md#classansys-dpf-scoping-1a82964b0127f36300908474a507cdd01a)
* [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping-1a6d0e48f879e9e6647f659a0010de361f)
* [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping-1a3f86c065a82a7ae05cbf16fc424fab39)
* [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping-1a9e087ca8b1a487f2afc83b848746fba2)
* [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping-1a11202e16776f413ef89146f6a528a1b1)
* [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping-1ae1d319d0e8a3704e26556a8b11da2273)
* [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping-1a95d3c08798fc15fb9daf34de74972518)
* [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping-1a6ba7035c72a55f1213134becfdcca71a)
* [setIds](classansys-dpf-scoping.md#classansys-dpf-scoping-1a021a022f87287b786ff9b3c92deb0e69)
* [setIds](classansys-dpf-scoping.md#classansys-dpf-scoping-1aad7349f7505d953324c71900cf3d020c)
* [setLocation](classansys-dpf-scoping.md#classansys-dpf-scoping-1abfc7b7b2376db292a67d05e9b7828367)
* [size](classansys-dpf-scoping.md#classansys-dpf-scoping-1aeae5e27bd752bdf0da3cc2d64fbe118a)
* [~DpfTypes](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1ab7c83b6ea160c2b115e056f6c312112f)
* [~Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping-1ad23775a1b1a5abb8c34c706298863119)

## Friends

## Public functions

<a id="classansys-dpf-scoping-1a6d0e48f879e9e6647f659a0010de361f"></a>
### Function Scoping

![][public]


```cpp
ansys::dpf::Scoping::Scoping()
```




Create a new scoping.



**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Scoping::Scoping"}]}`
-->

<a id="classansys-dpf-scoping-1a3f86c065a82a7ae05cbf16fc424fab39"></a>
### Function Scoping

![][public]


```cpp
ansys::dpf::Scoping::Scoping(std::vector< dp_id > const &ids, ansys::dpf::Location location)
```




Create a scoping of [ids](classansys-dpf-scoping.md#classansys-dpf-scoping-1acf26749e29d9f23de6c70806ccfaea6b) at a location.



**Parameters**:

* std::vector< [dp\_id](namespaceansys-dpf.md#namespaceansys-dpf-1ab4574c9af3f2bb8011da7d1f4c8da20e) > const & **ids**: [in] Vector of [ids](classansys-dpf-scoping.md#classansys-dpf-scoping-1acf26749e29d9f23de6c70806ccfaea6b).
* [ansys::dpf::Location](structansys-dpf-location.md#structansys-dpf-location) **location**: [in] [Location](structansys-dpf-location.md#structansys-dpf-location) of scoping.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Scoping::Scoping"}]}`
-->

<a id="classansys-dpf-scoping-1a9e087ca8b1a487f2afc83b848746fba2"></a>
### Function Scoping

![][public]


```cpp
ansys::dpf::Scoping::Scoping(std::vector< dp_id > const &ids, ansys::dpf::Location location, Client const *const client)
```




Create a scoping of [ids](classansys-dpf-scoping.md#classansys-dpf-scoping-1acf26749e29d9f23de6c70806ccfaea6b) at a location.



**Parameters**:

* std::vector< [dp\_id](namespaceansys-dpf.md#namespaceansys-dpf-1ab4574c9af3f2bb8011da7d1f4c8da20e) > const & **ids**: [in] Vector of [ids](classansys-dpf-scoping.md#classansys-dpf-scoping-1acf26749e29d9f23de6c70806ccfaea6b).
* [ansys::dpf::Location](structansys-dpf-location.md#structansys-dpf-location) **location**: [in] [Location](structansys-dpf-location.md#structansys-dpf-location) of scoping.
* [Client](classansys-dpf-client.md#classansys-dpf-client) const *const **client**: [in] [Client](classansys-dpf-client.md#classansys-dpf-client) instance designating the IP, port and protocol to use.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Scoping::Scoping"}]}`
-->

<a id="classansys-dpf-scoping-1a11202e16776f413ef89146f6a528a1b1"></a>
### Function Scoping

![][public]


```cpp
ansys::dpf::Scoping::Scoping(Client const *const client)
```




Create a new scoping on a server.



**Parameters**:

* [Client](classansys-dpf-client.md#classansys-dpf-client) const *const **client**: [in] [Client](classansys-dpf-client.md#classansys-dpf-client) instance designating the IP, port and protocol to use.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Scoping::Scoping"}]}`
-->

<a id="classansys-dpf-scoping-1ae1d319d0e8a3704e26556a8b11da2273"></a>
### Function Scoping

![][public]


```cpp
ansys::dpf::Scoping::Scoping(int id, Client const *const client)
```




Retrieve an existing instance of [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping) on a server.



**Parameters**:

* int **id**: [in] Id of the [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping) object on the server's database.
* [Client](classansys-dpf-client.md#classansys-dpf-client) const *const **client**: [in] [Client](classansys-dpf-client.md#classansys-dpf-client) instance designating the IP, port and protocol to use.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Scoping::Scoping"}]}`
-->

<a id="classansys-dpf-scoping-1ad23775a1b1a5abb8c34c706298863119"></a>
### Function ~Scoping

![][public]


```cpp
virtual ansys::dpf::Scoping::~Scoping()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Scoping::~Scoping"}]}`
-->

<a id="classansys-dpf-scoping-1a95d3c08798fc15fb9daf34de74972518"></a>
### Function Scoping

![][public]


```cpp
ansys::dpf::Scoping::Scoping(Scoping const &)
```








**Parameters**:

* Scoping const &

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Scoping::Scoping"}]}`
-->

<a id="classansys-dpf-scoping-1a6ba7035c72a55f1213134becfdcca71a"></a>
### Function Scoping

![][public]


```cpp
ansys::dpf::Scoping::Scoping(Scoping &&) noexcept
```








**Parameters**:

* Scoping &&

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Scoping::Scoping"}]}`
-->

<a id="classansys-dpf-scoping-1af6234c489fca21ae452862aa318bc725"></a>
### Function operator=

![][public]


```cpp
Scoping & ansys::dpf::Scoping::operator=(Scoping const &)
```








**Parameters**:

* Scoping const &

**Return type**: Scoping &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Scoping::operator="}]}`
-->

<a id="classansys-dpf-scoping-1afc257d442c28fa0bed7e8967f630e24f"></a>
### Function operator=

![][public]


```cpp
Scoping & ansys::dpf::Scoping::operator=(Scoping &&) noexcept
```








**Parameters**:

* Scoping &&

**Return type**: Scoping &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Scoping::operator="}]}`
-->

<a id="classansys-dpf-scoping-1a516b4489a94ff02ecc880f170b8f93a9"></a>
### Function location

![][public]
![][const]


```cpp
ansys::dpf::Location ansys::dpf::Scoping::location() const
```




**Returns**:

[Location](structansys-dpf-location.md#structansys-dpf-location) of [ids](classansys-dpf-scoping.md#classansys-dpf-scoping-1acf26749e29d9f23de6c70806ccfaea6b).



**Return type**: [ansys::dpf::Location](structansys-dpf-location.md#structansys-dpf-location)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Scoping::location"}]}`
-->

<a id="classansys-dpf-scoping-1abfc7b7b2376db292a67d05e9b7828367"></a>
### Function setLocation

![][public]


```cpp
void ansys::dpf::Scoping::setLocation(ansys::dpf::Location location)
```




Set location of scoping.



**Parameters**:

* [ansys::dpf::Location](structansys-dpf-location.md#structansys-dpf-location) **location**: [in] New location for scoping.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Scoping::setLocation"}]}`
-->

<a id="classansys-dpf-scoping-1a021a022f87287b786ff9b3c92deb0e69"></a>
### Function setIds

![][public]


```cpp
void ansys::dpf::Scoping::setIds(std::vector< dp_id > const &ids)
```




Update scoping to vector of new [ids](classansys-dpf-scoping.md#classansys-dpf-scoping-1acf26749e29d9f23de6c70806ccfaea6b).



**Parameters**:

* std::vector< [dp\_id](namespaceansys-dpf.md#namespaceansys-dpf-1ab4574c9af3f2bb8011da7d1f4c8da20e) > const & **ids**: [in] New [ids](classansys-dpf-scoping.md#classansys-dpf-scoping-1acf26749e29d9f23de6c70806ccfaea6b).

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Scoping::setIds"}]}`
-->

<a id="classansys-dpf-scoping-1aad7349f7505d953324c71900cf3d020c"></a>
### Function setIds

![][public]


```cpp
void ansys::dpf::Scoping::setIds(dp_id *ids, dp_int size)
```




Update scoping to list of new [ids](classansys-dpf-scoping.md#classansys-dpf-scoping-1acf26749e29d9f23de6c70806ccfaea6b).



**Parameters**:

* [dp\_id](namespaceansys-dpf.md#namespaceansys-dpf-1ab4574c9af3f2bb8011da7d1f4c8da20e) * **ids**: [in] List of [ids](classansys-dpf-scoping.md#classansys-dpf-scoping-1acf26749e29d9f23de6c70806ccfaea6b).
* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **size**: [in] Number of [ids](classansys-dpf-scoping.md#classansys-dpf-scoping-1acf26749e29d9f23de6c70806ccfaea6b).

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Scoping::setIds"}]}`
-->

<a id="classansys-dpf-scoping-1a5666c29a9074bd286801882ed3105de1"></a>
### Function identicalPointers

![][public]
![][const]


```cpp
bool ansys::dpf::Scoping::identicalPointers(Scoping const &f) const
```




Compare scoping with input scoping f.



**Parameters**:

* Scoping const & **f**: [in] [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping) with which to compare.

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Scoping::identicalPointers"}]}`
-->

<a id="classansys-dpf-scoping-1aeae5e27bd752bdf0da3cc2d64fbe118a"></a>
### Function size

![][public]
![][const]


```cpp
dp_int ansys::dpf::Scoping::size() const
```




**Returns**:

Number of entries in scoping.



**Return type**: [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Scoping::size"}]}`
-->

<a id="classansys-dpf-scoping-1ae35e47f2cceccf7ad9ed4590bd10ff89"></a>
### Function idByIndex

![][public]
![][const]


```cpp
dp_id ansys::dpf::Scoping::idByIndex(dp_int index) const
```




**Returns**:

Id at index offset into vector of [ids](classansys-dpf-scoping.md#classansys-dpf-scoping-1acf26749e29d9f23de6c70806ccfaea6b).



**Parameters**:

* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **index**: [in] index into vector of [ids](classansys-dpf-scoping.md#classansys-dpf-scoping-1acf26749e29d9f23de6c70806ccfaea6b).

**Return type**: [dp\_id](namespaceansys-dpf.md#namespaceansys-dpf-1ab4574c9af3f2bb8011da7d1f4c8da20e)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Scoping::idByIndex"}]}`
-->

<a id="classansys-dpf-scoping-1ab80b20d56d63ce48c08ce6b7428e06c2"></a>
### Function indexById

![][public]
![][const]


```cpp
dp_index ansys::dpf::Scoping::indexById(dp_int id) const
```




**Returns**:

Index of id within vector of [ids](classansys-dpf-scoping.md#classansys-dpf-scoping-1acf26749e29d9f23de6c70806ccfaea6b).


**Returns**:

-1 if id not found.



**Parameters**:

* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **id**: [in] id.

**Return type**: [dp\_index](namespaceansys-dpf.md#namespaceansys-dpf-1a417548d1b705a9ba54ba9429afe68920)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Scoping::indexById"}]}`
-->

<a id="classansys-dpf-scoping-1a0fc75ac65a5b13727b77e2c155828ccd"></a>
### Function at

![][public]
![][const]


```cpp
dp_id ansys::dpf::Scoping::at(dp_int index) const
```




**Returns**:

Id at index offset into vector of [ids](classansys-dpf-scoping.md#classansys-dpf-scoping-1acf26749e29d9f23de6c70806ccfaea6b).



**Parameters**:

* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **index**

**Return type**: [dp\_id](namespaceansys-dpf.md#namespaceansys-dpf-1ab4574c9af3f2bb8011da7d1f4c8da20e)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Scoping::at"}]}`
-->

<a id="classansys-dpf-scoping-1acf26749e29d9f23de6c70806ccfaea6b"></a>
### Function ids

![][public]
![][const]


```cpp
const dp_id * ansys::dpf::Scoping::ids(dp_int &size) const
```




**Returns**:

Pointer to list of [ids](classansys-dpf-scoping.md#classansys-dpf-scoping-1acf26749e29d9f23de6c70806ccfaea6b).



**Parameters**:

* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) & **size**: [out] Length of list.

**Return type**: const [dp\_id](namespaceansys-dpf.md#namespaceansys-dpf-1ab4574c9af3f2bb8011da7d1f4c8da20e) *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Scoping::ids"}]}`
-->

<a id="classansys-dpf-scoping-1a14dbd1c25bbfc1c3a3dc3ab9b5762d8c"></a>
### Function ids

![][public]
![][const]


```cpp
DpfVector< int > ansys::dpf::Scoping::ids() const
```




**Returns**:

[DpfVector](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector) of ids array.



**Return type**: DpfVector< int >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Scoping::ids"}]}`
-->

<a id="classansys-dpf-scoping-1a7377823a48ee69e439a8589627c5e6c0"></a>
### Function getIds

![][public]
![][const]


```cpp
void ansys::dpf::Scoping::getIds(std::vector< dp_id > &ids_to_fill) const
```




Update ids_to_fill with scoping [ids](classansys-dpf-scoping.md#classansys-dpf-scoping-1acf26749e29d9f23de6c70806ccfaea6b).



**Parameters**:

* std::vector< [dp\_id](namespaceansys-dpf.md#namespaceansys-dpf-1ab4574c9af3f2bb8011da7d1f4c8da20e) > & **ids_to_fill**: [out] vector of [ids](classansys-dpf-scoping.md#classansys-dpf-scoping-1acf26749e29d9f23de6c70806ccfaea6b).

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Scoping::getIds"}]}`
-->

<a id="classansys-dpf-scoping-1a94f0dd35d07efdc472ef072b42f9cfda"></a>
### Function emplace

![][public]


```cpp
void ansys::dpf::Scoping::emplace(dp_index index, dp_id id)
```




Set offset index into scoping to new id.



**Parameters**:

* [dp\_index](namespaceansys-dpf.md#namespaceansys-dpf-1a417548d1b705a9ba54ba9429afe68920) **index**: [in] [Location](structansys-dpf-location.md#structansys-dpf-location) for new id.
* [dp\_id](namespaceansys-dpf.md#namespaceansys-dpf-1ab4574c9af3f2bb8011da7d1f4c8da20e) **id**: [in] New id.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Scoping::emplace"}]}`
-->

<a id="classansys-dpf-scoping-1a0b2cb58e52e98cd3e3a97c5fd8889e8b"></a>
### Function hashIds

![][public]
![][const]


```cpp
std::string ansys::dpf::Scoping::hashIds() const
```








**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Scoping::hashIds"}]}`
-->

<a id="classansys-dpf-scoping-1a6b57f31ddd1d7f0b33451cb374ff3fb1"></a>
### Function reserve

![][public]


```cpp
void ansys::dpf::Scoping::reserve(dp_int size)
```




Reserve the container of ids.



**Parameters**:

* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **size**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Scoping::reserve"}]}`
-->

<a id="classansys-dpf-scoping-1a82964b0127f36300908474a507cdd01a"></a>
### Function resize

![][public]


```cpp
void ansys::dpf::Scoping::resize(dp_int size)
```




Resize the container of ids.



**Parameters**:

* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **size**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Scoping::resize"}]}`
-->

<a id="classansys-dpf-scoping-1a860cdcd91dc058236d1769fa6b880533"></a>
### Function getHash

![][public]
![][const]


```cpp
size_t ansys::dpf::Scoping::getHash() const
```




Compute and get the hash of a scoping



**Return type**: size_t

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Scoping::getHash"}]}`
-->

<a id="classansys-dpf-scoping-1a6abd0899c21554c8babd5985710edadc"></a>
### Function deep\_copy

![][public]
![][const]


```cpp
Scoping ansys::dpf::Scoping::deep_copy(ansys::dpf::Client const *const client=nullptr, const bool b_copy_ids=true) const
```




Create a new [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping) on a server by copying all the data of this [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping).



**Parameters**:

* [ansys::dpf::Client](classansys-dpf-client.md#classansys-dpf-client) const *const **client** = nullptr : [in] [Client](classansys-dpf-client.md#classansys-dpf-client) instance designating the IP, port and protocol to use.
* const bool **b_copy_ids** = true : [in] Boolean that allows to decide if scoping ids are to be copied

**Return type**: Scoping

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Scoping::deep_copy"}]}`
-->

## Public static functions

<a id="classansys-dpf-scoping-1a5c2fcf31c8714d27cec3455a94552650"></a>
### Function emptyScoping

![][public]
![][static]


```cpp
static Scoping ansys::dpf::Scoping::emptyScoping()
```




Create an empty scoping. 
**Returns**:

Empty [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping)



**Return type**: Scoping

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Scoping::emptyScoping"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)