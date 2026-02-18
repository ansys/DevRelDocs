<a id="classansys-dpf-scopingscontainer"></a>
# Class ansys::dpf::ScopingsContainer

![][C++]
![][public]



Contains a group of scopings.





The scopings container is designed as a set of scopings ordered through labels and ids. Labels identify how the fields are filtered. The most common scopings container have the label "body" with ids corresponding to each body entity.





Generally, a defined [ScopingsContainer](classansys-dpf-scopingscontainer.md#classansys-dpf-scopingscontainer) will contain [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping) entities to apply on the [MeshedRegion](classansys-dpf-meshedregion.md#classansys-dpf-meshedregion) entities of a corresponding [MeshesContainer](classansys-dpf-meshescontainer.md#classansys-dpf-meshescontainer).







**See also**: [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping)

**Inherits from**:

* ansys::dpf::CollectionBase

## Members

* [add](classansys-dpf-scopingscontainer.md#classansys-dpf-scopingscontainer-1a05cb61fc82233e1fbb0e307dd20fd2cb)
* [addLabel](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a623a0b168512a4621fb7af8084f9872b)
* [addLabel](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1ac6ce7bc876d6a94a97996d5febba5116)
* [addLabels](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1ae97480559c14c59e830559582c1f2cd5)
* [at](classansys-dpf-scopingscontainer.md#classansys-dpf-scopingscontainer-1ab1fdfc75b55ff6cd3c2475f1241734e4)
* [at](classansys-dpf-scopingscontainer.md#classansys-dpf-scopingscontainer-1a857bbd814a0a207fd94bd93ad2fe745c)
* [callAPI](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1aea34d37e0c080126eff70db34bf46597)
* [createSubScopingsContainer](classansys-dpf-scopingscontainer.md#classansys-dpf-scopingscontainer-1a937781f3a15cc04f81d38e290eb348e3)
* [deep\_copy](classansys-dpf-scopingscontainer.md#classansys-dpf-scopingscontainer-1a223fbc11c3fb729488a5f33772b2b2cf)
* [describe](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a9977945710983bc03d2940fa007847b2)
* [empty](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a39cd546c42518e2332be8f287db95459)
* [emptyScopingsContainer](classansys-dpf-scopingscontainer.md#classansys-dpf-scopingscontainer-1a915d28f8d3b7869182ca79f9c4269b4c)
* [getClient](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a968afd9daa0b0f13b65a2ac61369d73a)
* [getHash](classansys-dpf-scopingscontainer.md#classansys-dpf-scopingscontainer-1a455cf417503bd6ea107755cd4d630512)
* [getHashableKey](classansys-dpf-scopingscontainer.md#classansys-dpf-scopingscontainer-1a2f5c40470b1d6b9b98c6056a24187a46)
* [getLabelSpace](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a66d62492d07889a95a5d10f9d827cd11)
* [getMatchingScoping](classansys-dpf-scopingscontainer.md#classansys-dpf-scopingscontainer-1abcd0e3f3ff053fcf22c15469b0a00e78)
* [getMatchingScopingIndices](classansys-dpf-scopingscontainer.md#classansys-dpf-scopingscontainer-1a66a78cea272641bd538028e9d63cb3fe)
* [getScoping](classansys-dpf-scopingscontainer.md#classansys-dpf-scopingscontainer-1a72ac39c1f6bd56ac3ebe624369b3249f)
* [getScopings](classansys-dpf-scopingscontainer.md#classansys-dpf-scopingscontainer-1aecc5c3362d12b433b29fd9e5ca450418)
* [getScopingsIndices](classansys-dpf-scopingscontainer.md#classansys-dpf-scopingscontainer-1a2a8782dceeb20d78578011c3b3accfff)
* [getSizeFor](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1aab65999d65acb4eab6aa7375266e5456)
* [hasBeenMovedLocally](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a1a5634202c15404b6b24e8f50e51cb66)
* [hasInternalObject](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1ae198f89868d85c7db6dc1a934a1d3c15)
* [hasLabel](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a82ac9433fd3963b37b07989ef05de331)
* [id](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a5e8d2dd8b9b6cf273985ce3ead392830)
* [isOnCommonAPI](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a9f9789ff61cc9d400a2a344830706b73)
* [isSameObject](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1aa64d5f8fcd7d85ad6ebf708494dbefd7)
* [labels](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a2c1bb3718e1a96d3f40b64794eb25f91)
* [labelScoping](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1ac61aef82ffe249c95dd10cf40de7c910)
* [name](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a691450ab7c89db80f39d6bb2d10eace4)
* [operator=](classansys-dpf-scopingscontainer.md#classansys-dpf-scopingscontainer-1a88e8eb80b0d732f01257cbb430c9f6bf)
* [operator=](classansys-dpf-scopingscontainer.md#classansys-dpf-scopingscontainer-1a166689f1f66dec10d0fca9617659298a)
* [operator[]](classansys-dpf-scopingscontainer.md#classansys-dpf-scopingscontainer-1a9477378fc07a99bb193afa7b594ac67f)
* [reserve](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a98ab98c9a6b91b886fd600ed7d9e633b)
* [resize](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1ac88664d3e1d22abb74a95c8223b1e771)
* [ScopingsContainer](classansys-dpf-scopingscontainer.md#classansys-dpf-scopingscontainer-1a8a6a368f60b050095b056bed6f14717f)
* [ScopingsContainer](classansys-dpf-scopingscontainer.md#classansys-dpf-scopingscontainer-1a98f063603783bdb8947982e927b2a516)
* [ScopingsContainer](classansys-dpf-scopingscontainer.md#classansys-dpf-scopingscontainer-1a537e44964af7b5d2dcd8b830f767dbc4)
* [ScopingsContainer](classansys-dpf-scopingscontainer.md#classansys-dpf-scopingscontainer-1ab5ca28dd2c6971bcdc6c05ac9e2ab0cb)
* [ScopingsContainer](classansys-dpf-scopingscontainer.md#classansys-dpf-scopingscontainer-1aed23cb82bda6642f331cfe841701525a)
* [ScopingsContainer](classansys-dpf-scopingscontainer.md#classansys-dpf-scopingscontainer-1a7d11bd51f92baa443d303095b7e432c3)
* [ScopingsContainer](classansys-dpf-scopingscontainer.md#classansys-dpf-scopingscontainer-1a62fa8d44f5d7faf885ed3fad4c4c4c97)
* [setHashableKey](classansys-dpf-scopingscontainer.md#classansys-dpf-scopingscontainer-1a08d196ad815b72f5de7c8524d490d170)
* [setId](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a93ebbfe9396dd1c4f447e799db6cbf3b)
* [setName](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a44394f964c6130dcbaed446cec3b0197)
* [setSupport](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1ae6f7683496d153ed944856d42b97dc82)
* [setSupport](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1ada2a037068417557fd7d410577a7fbb9)
* [size](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a69e6878d2d691807f8a45ddfbda42f9e)
* [support](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a9830a03b992af391bf03acad90eac372)
* [update](classansys-dpf-scopingscontainer.md#classansys-dpf-scopingscontainer-1a091782e39cd46714cd923cf784d8d30b)
* [~CollectionBase](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a99e04439d35f26b89f4d66813d74035b)
* [~DpfTypes](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1ab7c83b6ea160c2b115e056f6c312112f)
* [~ScopingsContainer](classansys-dpf-scopingscontainer.md#classansys-dpf-scopingscontainer-1a4e6cd0281975ade68850bc1cb7a7960d)

## Friends

## Public functions

<a id="classansys-dpf-scopingscontainer-1a8a6a368f60b050095b056bed6f14717f"></a>
### Function ScopingsContainer

![][public]


```cpp
ansys::dpf::ScopingsContainer::ScopingsContainer()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ScopingsContainer::ScopingsContainer"}]}`
-->

<a id="classansys-dpf-scopingscontainer-1a4e6cd0281975ade68850bc1cb7a7960d"></a>
### Function ~ScopingsContainer

![][public]


```cpp
virtual ansys::dpf::ScopingsContainer::~ScopingsContainer()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ScopingsContainer::~ScopingsContainer"}]}`
-->

<a id="classansys-dpf-scopingscontainer-1a98f063603783bdb8947982e927b2a516"></a>
### Function ScopingsContainer

![][public]


```cpp
ansys::dpf::ScopingsContainer::ScopingsContainer(ScopingsContainer const &)
```








**Parameters**:

* ScopingsContainer const &

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ScopingsContainer::ScopingsContainer"}]}`
-->

<a id="classansys-dpf-scopingscontainer-1a537e44964af7b5d2dcd8b830f767dbc4"></a>
### Function ScopingsContainer

![][public]


```cpp
ansys::dpf::ScopingsContainer::ScopingsContainer(ScopingsContainer &&) noexcept
```








**Parameters**:

* ScopingsContainer &&

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ScopingsContainer::ScopingsContainer"}]}`
-->

<a id="classansys-dpf-scopingscontainer-1ab5ca28dd2c6971bcdc6c05ac9e2ab0cb"></a>
### Function ScopingsContainer

![][public]


```cpp
ansys::dpf::ScopingsContainer::ScopingsContainer(Client const *const client)
```




Create a new scopings container on a server.



**Parameters**:

* [Client](classansys-dpf-client.md#classansys-dpf-client) const *const **client**: [in] [Client](classansys-dpf-client.md#classansys-dpf-client) instance designating the IP, port and protocol to use.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ScopingsContainer::ScopingsContainer"}]}`
-->

<a id="classansys-dpf-scopingscontainer-1aed23cb82bda6642f331cfe841701525a"></a>
### Function ScopingsContainer

![][public]


```cpp
ansys::dpf::ScopingsContainer::ScopingsContainer(Client const *const client, std::vector< std::string > const &labels)
```




Create a group of scopings with the given labels on a server.



**Parameters**:

* [Client](classansys-dpf-client.md#classansys-dpf-client) const *const **client**: [in] [Client](classansys-dpf-client.md#classansys-dpf-client) instance designating the IP, port and protocol to use.
* std::vector< std::string > const & **labels**: [in] Labels for group of scopings.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ScopingsContainer::ScopingsContainer"}]}`
-->

<a id="classansys-dpf-scopingscontainer-1a7d11bd51f92baa443d303095b7e432c3"></a>
### Function ScopingsContainer

![][public]


```cpp
ansys::dpf::ScopingsContainer::ScopingsContainer(int id, Client const *const client)
```




Retrieve an existing instance of [ScopingsContainer](classansys-dpf-scopingscontainer.md#classansys-dpf-scopingscontainer) on a server.



**Parameters**:

* int **id**: [in] Id of the [ScopingsContainer](classansys-dpf-scopingscontainer.md#classansys-dpf-scopingscontainer) object on the server's database.
* [Client](classansys-dpf-client.md#classansys-dpf-client) const *const **client**: [in] [Client](classansys-dpf-client.md#classansys-dpf-client) instance designating the IP, port and protocol to use.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ScopingsContainer::ScopingsContainer"}]}`
-->

<a id="classansys-dpf-scopingscontainer-1a62fa8d44f5d7faf885ed3fad4c4c4c97"></a>
### Function ScopingsContainer

![][public]


```cpp
ansys::dpf::ScopingsContainer::ScopingsContainer(std::vector< std::string > const &labels)
```




Create a group of scopings with the given labels.



**Parameters**:

* std::vector< std::string > const & **labels**: [in] Labels for group of scopings.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ScopingsContainer::ScopingsContainer"}]}`
-->

<a id="classansys-dpf-scopingscontainer-1a88e8eb80b0d732f01257cbb430c9f6bf"></a>
### Function operator=

![][public]


```cpp
ScopingsContainer & ansys::dpf::ScopingsContainer::operator=(ScopingsContainer const &)
```








**Parameters**:

* ScopingsContainer const &

**Return type**: ScopingsContainer &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ScopingsContainer::operator="}]}`
-->

<a id="classansys-dpf-scopingscontainer-1a166689f1f66dec10d0fca9617659298a"></a>
### Function operator=

![][public]


```cpp
ScopingsContainer & ansys::dpf::ScopingsContainer::operator=(ScopingsContainer &&) noexcept
```








**Parameters**:

* ScopingsContainer &&

**Return type**: ScopingsContainer &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ScopingsContainer::operator="}]}`
-->

<a id="classansys-dpf-scopingscontainer-1a9477378fc07a99bb193afa7b594ac67f"></a>
### Function operator[]

![][public]


```cpp
Scoping ansys::dpf::ScopingsContainer::operator[](dp_int index)
```




**Returns**:

[Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping) at given index.



**Parameters**:

* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **index**: [in] Index of scoping.

**Return type**: [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ScopingsContainer::operator[]"}]}`
-->

<a id="classansys-dpf-scopingscontainer-1ab1fdfc75b55ff6cd3c2475f1241734e4"></a>
### Function at

![][public]


```cpp
Scoping ansys::dpf::ScopingsContainer::at(dp_index index)
```




**Returns**:

[Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping) at given index.



**Parameters**:

* [dp\_index](namespaceansys-dpf.md#namespaceansys-dpf-1a417548d1b705a9ba54ba9429afe68920) **index**: [in] Index of scoping to get.

**Return type**: [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ScopingsContainer::at"}]}`
-->

<a id="classansys-dpf-scopingscontainer-1a857bbd814a0a207fd94bd93ad2fe745c"></a>
### Function at

![][public]
![][const]


```cpp
const Scoping ansys::dpf::ScopingsContainer::at(dp_index index) const
```




**Returns**:

[Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping) at given index.



**Parameters**:

* [dp\_index](namespaceansys-dpf.md#namespaceansys-dpf-1a417548d1b705a9ba54ba9429afe68920) **index**: [in] Index of scoping to get.

**Return type**: const [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ScopingsContainer::at"}]}`
-->

<a id="classansys-dpf-scopingscontainer-1a091782e39cd46714cd923cf784d8d30b"></a>
### Function update

![][public]


```cpp
void ansys::dpf::ScopingsContainer::update(Scoping &f, dp_index index)
```




Update [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping) at given index.



**Parameters**:

* [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping) & **f**: [in] New scoping.
* [dp\_index](namespaceansys-dpf.md#namespaceansys-dpf-1a417548d1b705a9ba54ba9429afe68920) **index**: [in] Index of scoping to update.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ScopingsContainer::update"}]}`
-->

<a id="classansys-dpf-scopingscontainer-1a05cb61fc82233e1fbb0e307dd20fd2cb"></a>
### Function add

![][public]


```cpp
void ansys::dpf::ScopingsContainer::add(LabelSpace const &labels, Scoping const &f, bool can_replace=true)
```




Add new scoping with given labels to group.



**Parameters**:

* [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace) const & **labels**: [in] [Label](structansys-dpf-label.md#structansys-dpf-label) space to use for new scoping.
* [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping) const & **f**: [in] [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping) to add to group.
* bool **can_replace** = true : [in] if can_replace is false, then, the entity is pushed back without checking if the label space already exists.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ScopingsContainer::add"}]}`
-->

<a id="classansys-dpf-scopingscontainer-1aecc5c3362d12b433b29fd9e5ca450418"></a>
### Function getScopings

![][public]
![][const]


```cpp
std::vector< Scoping > ansys::dpf::ScopingsContainer::getScopings(LabelSpace const &labels) const
```




**Returns**:

Vector of scopings for given label space.



**Parameters**:

* [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace) const & **labels**: [in] [Label](structansys-dpf-label.md#structansys-dpf-label) space for whict to get scopings.

**Return type**: std::vector< [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping) >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ScopingsContainer::getScopings"}]}`
-->

<a id="classansys-dpf-scopingscontainer-1a2a8782dceeb20d78578011c3b3accfff"></a>
### Function getScopingsIndices

![][public]
![][const]


```cpp
std::vector< dp_index > ansys::dpf::ScopingsContainer::getScopingsIndices(LabelSpace const &lab_space) const
```




**Returns**:

[Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping) indices for scopings given by [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace)



**Parameters**:

* [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace) const & **lab_space**: [in] [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace) defining scopings for which to get indices.

**Return type**: std::vector< [dp\_index](namespaceansys-dpf.md#namespaceansys-dpf-1a417548d1b705a9ba54ba9429afe68920) >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ScopingsContainer::getScopingsIndices"}]}`
-->

<a id="classansys-dpf-scopingscontainer-1a72ac39c1f6bd56ac3ebe624369b3249f"></a>
### Function getScoping

![][public]
![][const]


```cpp
Scoping ansys::dpf::ScopingsContainer::getScoping(LabelSpace const &labels) const
```




**Returns**:

First scoping for given label space.



**Parameters**:

* [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace) const & **labels**: [in] [Label](structansys-dpf-label.md#structansys-dpf-label) space for which to get first scoping.

**Return type**: [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ScopingsContainer::getScoping"}]}`
-->

<a id="classansys-dpf-scopingscontainer-1abcd0e3f3ff053fcf22c15469b0a00e78"></a>
### Function getMatchingScoping

![][public]
![][const]


```cpp
Scoping ansys::dpf::ScopingsContainer::getMatchingScoping(LabelSpace const &label_space) const
```




**Returns**:

First matching [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping) for given label space.



**Parameters**:

* [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace) const & **label_space**: [in] [Label](structansys-dpf-label.md#structansys-dpf-label) space for which to get [Any](classansys-dpf-any.md#classansys-dpf-any).

**Return type**: [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ScopingsContainer::getMatchingScoping"}]}`
-->

<a id="classansys-dpf-scopingscontainer-1a66a78cea272641bd538028e9d63cb3fe"></a>
### Function getMatchingScopingIndices

![][public]
![][const]


```cpp
DpfVector< dp_index > ansys::dpf::ScopingsContainer::getMatchingScopingIndices(LabelSpace const &label_space) const
```




**Returns**:

Vector of matching [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping) to the given label space.



**Parameters**:

* [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace) const & **label_space**: [in] [Label](structansys-dpf-label.md#structansys-dpf-label) space for which to get entries.

**Return type**: [DpfVector](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector)< [dp\_index](namespaceansys-dpf.md#namespaceansys-dpf-1a417548d1b705a9ba54ba9429afe68920) >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ScopingsContainer::getMatchingScopingIndices"}]}`
-->

<a id="classansys-dpf-scopingscontainer-1a937781f3a15cc04f81d38e290eb348e3"></a>
### Function createSubScopingsContainer

![][public]
![][const]


```cpp
ScopingsContainer ansys::dpf::ScopingsContainer::createSubScopingsContainer(LabelSpace const &lab_space) const
```




Create a new [ScopingsContainer](classansys-dpf-scopingscontainer.md#classansys-dpf-scopingscontainer) with all the scopings corresponding to the label space in input



**Parameters**:

* [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace) const & **lab_space**: [in] [Label](structansys-dpf-label.md#structansys-dpf-label) space for which to create new scopings container.

**Return type**: ScopingsContainer

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ScopingsContainer::createSubScopingsContainer"}]}`
-->

<a id="classansys-dpf-scopingscontainer-1a223fbc11c3fb729488a5f33772b2b2cf"></a>
### Function deep\_copy

![][public]
![][const]


```cpp
ScopingsContainer ansys::dpf::ScopingsContainer::deep_copy(ansys::dpf::Client const *const client=nullptr) const
```




Create a new [ScopingsContainer](classansys-dpf-scopingscontainer.md#classansys-dpf-scopingscontainer) on a server by copying all the data of this [ScopingsContainer](classansys-dpf-scopingscontainer.md#classansys-dpf-scopingscontainer).



**Parameters**:

* [ansys::dpf::Client](classansys-dpf-client.md#classansys-dpf-client) const *const **client** = nullptr : [in] [Client](classansys-dpf-client.md#classansys-dpf-client) instance designating the IP, port and protocol to use.

**Return type**: ScopingsContainer

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ScopingsContainer::deep_copy"}]}`
-->

<a id="classansys-dpf-scopingscontainer-1a2f5c40470b1d6b9b98c6056a24187a46"></a>
### Function getHashableKey

![][public]
![][const]


```cpp
std::string ansys::dpf::ScopingsContainer::getHashableKey() const
```




Set and get an simpler hashable entity (here a topoloy identifier) instead of the full scoppings container to save time



**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ScopingsContainer::getHashableKey"}]}`
-->

<a id="classansys-dpf-scopingscontainer-1a08d196ad815b72f5de7c8524d490d170"></a>
### Function setHashableKey

![][public]
![][const]


```cpp
void ansys::dpf::ScopingsContainer::setHashableKey(const std::string &unique_identifier) const
```








**Parameters**:

* const std::string & **unique_identifier**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ScopingsContainer::setHashableKey"}]}`
-->

<a id="classansys-dpf-scopingscontainer-1a455cf417503bd6ea107755cd4d630512"></a>
### Function getHash

![][public]
![][const]


```cpp
size_t ansys::dpf::ScopingsContainer::getHash() const
```




Compute and get the hash of a scopings_container



**Return type**: size_t

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ScopingsContainer::getHash"}]}`
-->

## Public static functions

<a id="classansys-dpf-scopingscontainer-1a915d28f8d3b7869182ca79f9c4269b4c"></a>
### Function emptyScopingsContainer

![][public]
![][static]


```cpp
static ScopingsContainer ansys::dpf::ScopingsContainer::emptyScopingsContainer()
```




Create an empty scopings container. 
**Returns**:

Empty [ScopingsContainer](classansys-dpf-scopingscontainer.md#classansys-dpf-scopingscontainer).



**Return type**: ScopingsContainer

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ScopingsContainer::emptyScopingsContainer"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)