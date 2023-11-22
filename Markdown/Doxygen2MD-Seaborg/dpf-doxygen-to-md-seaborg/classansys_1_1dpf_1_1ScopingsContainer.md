<a id="classansys_1_1dpf_1_1ScopingsContainer"></a>
# Class ansys::dpf::ScopingsContainer

![][C++]
![][public]

**Definition**: `dpf\_api.h` (line 1716)



Contains a group of scopings.





The scopings container is designed as a set of scopings ordered through labels and ids. Labels identify how the fields are filtered. The most common scopings container have the label "body" with ids corresponding to each body entity.





Generally, a defined [ScopingsContainer](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer) will contain [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping) entities to apply on the [MeshedRegion](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion) entities of a corresponding [MeshesContainer](classansys_1_1dpf_1_1MeshesContainer.md#classansys_1_1dpf_1_1MeshesContainer).








**See also**: [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping), [Using collections and labels](group__group__12.md#group__group__12)

**Inherits from**:

* [ansys::dpf::DpfTypes](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes)

## Members

* [add](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer_1a84dd455cbed983a8c00cc30c4365427f)
* [addLabel](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer_1a752450fb784b9acfcdf59dc4351f679e)
* [addLabel](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer_1a40a07db93d1ca4b004085b68a3e61125)
* [addLabels](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer_1a2051db5160a0bf065134b5fe972447f5)
* [at](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer_1ab1fdfc75b55ff6cd3c2475f1241734e4)
* [at](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer_1a857bbd814a0a207fd94bd93ad2fe745c)
* [callAPI](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a1ef954a45b178eac4de68813168db6fb)
* [createSubScopingsContainer](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer_1a937781f3a15cc04f81d38e290eb348e3)
* [deep\_copy](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer_1a223fbc11c3fb729488a5f33772b2b2cf)
* [describe](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a9977945710983bc03d2940fa007847b2)
* [empty](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a39cd546c42518e2332be8f287db95459)
* [emptyScopingsContainer](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer_1a915d28f8d3b7869182ca79f9c4269b4c)
* [getClient](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a968afd9daa0b0f13b65a2ac61369d73a)
* [getLabelSpace](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer_1a989ff8e9da5f347ef75dbdcce9a9e6e1)
* [getScoping](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer_1a72ac39c1f6bd56ac3ebe624369b3249f)
* [getScopings](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer_1a8e3d356ad51c2e8f4839d8b276bc10ab)
* [getScopingsIndices](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer_1a36613df121b439ec8a00fdf38922bd47)
* [getSizeFor](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer_1a840c89a1ed4500527461ed55d4e323e4)
* [hasBeenMovedLocally](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a1a5634202c15404b6b24e8f50e51cb66)
* [hasLabel](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer_1ab0054773938a4a4a05a2eee3b8b11e30)
* [id](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer_1ad3f754bfb43dc2624bdf35314deb9f71)
* [isOnCommonAPI](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a9f9789ff61cc9d400a2a344830706b73)
* [isSameObject](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1aa64d5f8fcd7d85ad6ebf708494dbefd7)
* [labels](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer_1a190cffc6c97644bd0fb4c8e1278dcde1)
* [labelScoping](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer_1a9b5034eb9b32f5c174bce48ea95fd5d5)
* [name](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer_1adce27b49797d1004950fb3015d3d5fee)
* [operator=](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer_1aa481e2fffe45e7cc09f4960825a7428b)
* [operator=](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer_1ab2d28b66900981cd8dcf8a1e655d4f11)
* [operator[]](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer_1a9477378fc07a99bb193afa7b594ac67f)
* [reserve](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer_1a192faaae07f45e329fb20b49eba6400c)
* [resize](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer_1a50ab61aa111158f682abb92b666b89bf)
* [ScopingsContainer](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer_1a85d23226c9519f0f07fe5eb1088e4afb)
* [ScopingsContainer](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer_1a8a6a368f60b050095b056bed6f14717f)
* [ScopingsContainer](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer_1a98f063603783bdb8947982e927b2a516)
* [ScopingsContainer](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer_1adff802e4b70fb2be8c3fa63d0813a9cf)
* [ScopingsContainer](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer_1ab5ca28dd2c6971bcdc6c05ac9e2ab0cb)
* [ScopingsContainer](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer_1aed23cb82bda6642f331cfe841701525a)
* [ScopingsContainer](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer_1a7d11bd51f92baa443d303095b7e432c3)
* [ScopingsContainer](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer_1a62fa8d44f5d7faf885ed3fad4c4c4c97)
* [setId](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer_1a2318b0cfaf7a88b434205b9fe2086b07)
* [setName](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer_1a19242b422fe19242ac71e678f84569e7)
* [size](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer_1a97551f74cb9ca448e5d1050a37403346)
* [update](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer_1a091782e39cd46714cd923cf784d8d30b)
* [~DpfTypes](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1ab7c83b6ea160c2b115e056f6c312112f)
* [~ScopingsContainer](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer_1a4e6cd0281975ade68850bc1cb7a7960d)

## Friends

<a id="classansys_1_1dpf_1_1ScopingsContainer_1a33ff3f826991522d2e77c1c523f33e19"></a>
### Friend Operator

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 1718)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Operator"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classansys_1_1dpf_1_1Operator"},"children":[{"type":"text","text":"Operator"}]}]},{"type":"text","text":"\n        "}]}

<a id="classansys_1_1dpf_1_1ScopingsContainer_1afa07847c7cb432b260e61a0c18025ba3"></a>
### Friend Workflow

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 1719)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Workflow"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classansys_1_1dpf_1_1Workflow"},"children":[{"type":"text","text":"Workflow"}]}]},{"type":"text","text":"\n        "}]}

<a id="classansys_1_1dpf_1_1ScopingsContainer_1a81d95df60edf516a1de9878b780f8fb3"></a>
### Friend OperatorMain

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 1720)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class OperatorMain"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classansys_1_1dpf_1_1OperatorMain"},"children":[{"type":"text","text":"OperatorMain"}]}]},{"type":"text","text":"\n        "}]}

<a id="classansys_1_1dpf_1_1ScopingsContainer_1a9820c685b67a3355c042bb0b3365d9e2"></a>
### Friend Any

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 1721)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Any"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classansys_1_1dpf_1_1Any"},"children":[{"type":"text","text":"Any"}]}]},{"type":"text","text":"\n        "}]}

## Private functions

<a id="classansys_1_1dpf_1_1ScopingsContainer_1a85d23226c9519f0f07fe5eb1088e4afb"></a>
### Function ScopingsContainer

![][private]

```cpp
ansys::dpf::ScopingsContainer::ScopingsContainer(opaque::DpfInternalSharedObject *)
```







**Parameters**:

* opaque::DpfInternalSharedObject *

**Return type**: 

## Public functions

<a id="classansys_1_1dpf_1_1ScopingsContainer_1a8a6a368f60b050095b056bed6f14717f"></a>
### Function ScopingsContainer

![][public]

```cpp
ansys::dpf::ScopingsContainer::ScopingsContainer()
```







**Return type**: 

<a id="classansys_1_1dpf_1_1ScopingsContainer_1a4e6cd0281975ade68850bc1cb7a7960d"></a>
### Function ~ScopingsContainer

![][public]

```cpp
virtual ansys::dpf::ScopingsContainer::~ScopingsContainer()
```







**Return type**: 

<a id="classansys_1_1dpf_1_1ScopingsContainer_1a98f063603783bdb8947982e927b2a516"></a>
### Function ScopingsContainer

![][public]

```cpp
ansys::dpf::ScopingsContainer::ScopingsContainer(ScopingsContainer const &)
```







**Parameters**:

* [ScopingsContainer](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer) const &

**Return type**: 

<a id="classansys_1_1dpf_1_1ScopingsContainer_1adff802e4b70fb2be8c3fa63d0813a9cf"></a>
### Function ScopingsContainer

![][public]

```cpp
ansys::dpf::ScopingsContainer::ScopingsContainer(ScopingsContainer &&)
```







**Parameters**:

* [ScopingsContainer](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer) &&

**Return type**: 

<a id="classansys_1_1dpf_1_1ScopingsContainer_1ab5ca28dd2c6971bcdc6c05ac9e2ab0cb"></a>
### Function ScopingsContainer

![][public]

```cpp
ansys::dpf::ScopingsContainer::ScopingsContainer(Client const *const client)
```



Create a new scopings container on a server.



**Parameters**:

* [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client**: [in] [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) instance designating the IP, port and protocol to use.

**Return type**: 

<a id="classansys_1_1dpf_1_1ScopingsContainer_1aed23cb82bda6642f331cfe841701525a"></a>
### Function ScopingsContainer

![][public]

```cpp
ansys::dpf::ScopingsContainer::ScopingsContainer(Client const *const client, std::vector< std::string > const &labels)
```



Create a group of scopings with the given labels on a server.



**Parameters**:

* [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client**: [in] [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) instance designating the IP, port and protocol to use.
* std::vector< std::string > const & **labels**: [in] Labels for group of scopings.

**Return type**: 

<a id="classansys_1_1dpf_1_1ScopingsContainer_1a7d11bd51f92baa443d303095b7e432c3"></a>
### Function ScopingsContainer

![][public]

```cpp
ansys::dpf::ScopingsContainer::ScopingsContainer(int id, Client const *const client)
```



Retrieve an existing instance of [ScopingsContainer](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer) on a server. <br/>



**Parameters**:

* int **id**: [in] Id of the [ScopingsContainer](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer) object on the server's database.
* [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client**: [in] [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) instance designating the IP, port and protocol to use.

**Return type**: 

<a id="classansys_1_1dpf_1_1ScopingsContainer_1a62fa8d44f5d7faf885ed3fad4c4c4c97"></a>
### Function ScopingsContainer

![][public]

```cpp
ansys::dpf::ScopingsContainer::ScopingsContainer(std::vector< std::string > const &labels)
```



Create a group of scopings with the given labels.



**Parameters**:

* std::vector< std::string > const & **labels**: [in] Labels for group of scopings.

**Return type**: 

<a id="classansys_1_1dpf_1_1ScopingsContainer_1aa481e2fffe45e7cc09f4960825a7428b"></a>
### Function operator=

![][public]

```cpp
ScopingsContainer& ansys::dpf::ScopingsContainer::operator=(ScopingsContainer const &)
```







**Parameters**:

* [ScopingsContainer](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer) const &

**Return type**: [ScopingsContainer](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer) &

<a id="classansys_1_1dpf_1_1ScopingsContainer_1ab2d28b66900981cd8dcf8a1e655d4f11"></a>
### Function operator=

![][public]

```cpp
ScopingsContainer& ansys::dpf::ScopingsContainer::operator=(ScopingsContainer &&)
```







**Parameters**:

* [ScopingsContainer](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer) &&

**Return type**: [ScopingsContainer](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer) &

<a id="classansys_1_1dpf_1_1ScopingsContainer_1a9477378fc07a99bb193afa7b594ac67f"></a>
### Function operator[]

![][public]

```cpp
Scoping ansys::dpf::ScopingsContainer::operator[](dp_int index)
```



**Returns**:

[Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping) at given index.



**Parameters**:

* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **index**: [in] Index of scoping.

**Return type**: [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping)

<a id="classansys_1_1dpf_1_1ScopingsContainer_1a97551f74cb9ca448e5d1050a37403346"></a>
### Function size

![][public]
![][const]

```cpp
dp_int ansys::dpf::ScopingsContainer::size() const
```



**Returns**:

Number of scopings.



**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<a id="classansys_1_1dpf_1_1ScopingsContainer_1ab1fdfc75b55ff6cd3c2475f1241734e4"></a>
### Function at

![][public]

```cpp
Scoping ansys::dpf::ScopingsContainer::at(dp_index index)
```



**Returns**:

[Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping) at given index.



**Parameters**:

* [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) **index**: [in] Index of scoping to get.

**Return type**: [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping)

<a id="classansys_1_1dpf_1_1ScopingsContainer_1a857bbd814a0a207fd94bd93ad2fe745c"></a>
### Function at

![][public]
![][const]

```cpp
const Scoping ansys::dpf::ScopingsContainer::at(dp_index index) const
```



**Returns**:

[Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping) at given index.



**Parameters**:

* [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) **index**: [in] Index of scoping to get.

**Return type**: const [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping)

<a id="classansys_1_1dpf_1_1ScopingsContainer_1a091782e39cd46714cd923cf784d8d30b"></a>
### Function update

![][public]

```cpp
void ansys::dpf::ScopingsContainer::update(Scoping &f, dp_index index)
```



Update [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping) at given index.



**Parameters**:

* [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping) & **f**: [in] New scoping.
* [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) **index**: [in] Index of scoping to update.

**Return type**: void

<a id="classansys_1_1dpf_1_1ScopingsContainer_1a192faaae07f45e329fb20b49eba6400c"></a>
### Function reserve

![][public]

```cpp
void ansys::dpf::ScopingsContainer::reserve(dp_int size)
```



Reserve space for given number of scopings.



**Parameters**:

* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **size**: [in] Number of scopings.

**Return type**: void

<a id="classansys_1_1dpf_1_1ScopingsContainer_1a50ab61aa111158f682abb92b666b89bf"></a>
### Function resize

![][public]

```cpp
void ansys::dpf::ScopingsContainer::resize(dp_int size)
```



Resize container to given number of scopings.



**Parameters**:

* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **size**: [in] Number of scopings.

**Return type**: void

<a id="classansys_1_1dpf_1_1ScopingsContainer_1a752450fb784b9acfcdf59dc4351f679e"></a>
### Function addLabel

![][public]

```cpp
void ansys::dpf::ScopingsContainer::addLabel(std::string const &label)
```



Add new scoping with given label to group of scopings.



**Parameters**:

* std::string const & **label**: [in] [Label](structansys_1_1dpf_1_1Label.md#structansys_1_1dpf_1_1Label) for new scoping.

**Return type**: void

<a id="classansys_1_1dpf_1_1ScopingsContainer_1a40a07db93d1ca4b004085b68a3e61125"></a>
### Function addLabel

![][public]

```cpp
void ansys::dpf::ScopingsContainer::addLabel(std::string const &label, dp_id default_value)
```



Add label with value for new scoping in group of scopings.



**Parameters**:

* std::string const & **label**: [in] [Label](structansys_1_1dpf_1_1Label.md#structansys_1_1dpf_1_1Label) for new scoping.
* [dp\_id](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ab4574c9af3f2bb8011da7d1f4c8da20e) **default_value**: [in] Value for label.

**Return type**: void

<a id="classansys_1_1dpf_1_1ScopingsContainer_1a2051db5160a0bf065134b5fe972447f5"></a>
### Function addLabels

![][public]

```cpp
void ansys::dpf::ScopingsContainer::addLabels(std::vector< std::string > const &labels)
```



Add list of labels for new scopings in group.



**Parameters**:

* std::vector< std::string > const & **labels**: [in] Labels for new scopings.

**Return type**: void

<a id="classansys_1_1dpf_1_1ScopingsContainer_1a84dd455cbed983a8c00cc30c4365427f"></a>
### Function add

![][public]

```cpp
void ansys::dpf::ScopingsContainer::add(LabelSpace const &labels, Scoping const &f)
```



Add new scoping with given labels to group.



**Parameters**:

* [LabelSpace](classansys_1_1dpf_1_1LabelSpace.md#classansys_1_1dpf_1_1LabelSpace) const & **labels**: [in] [Label](structansys_1_1dpf_1_1Label.md#structansys_1_1dpf_1_1Label) space to use for new scoping.
* [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping) const & **f**: [in] [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping) to add to group.

**Return type**: void

<a id="classansys_1_1dpf_1_1ScopingsContainer_1a840c89a1ed4500527461ed55d4e323e4"></a>
### Function getSizeFor

![][public]
![][const]

```cpp
dp_int ansys::dpf::ScopingsContainer::getSizeFor(LabelSpace const &labels) const
```



**Returns**:

Number of scopings for given label space.



**Parameters**:

* [LabelSpace](classansys_1_1dpf_1_1LabelSpace.md#classansys_1_1dpf_1_1LabelSpace) const & **labels**: [in] [Label](structansys_1_1dpf_1_1Label.md#structansys_1_1dpf_1_1Label) space for which to get number of scopings.

**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<a id="classansys_1_1dpf_1_1ScopingsContainer_1a8e3d356ad51c2e8f4839d8b276bc10ab"></a>
### Function getScopings

![][public]
![][const]

```cpp
std::vector<Scoping> ansys::dpf::ScopingsContainer::getScopings(LabelSpace const &labels) const
```



**Returns**:

Vector of scopings for given label space.



**Parameters**:

* [LabelSpace](classansys_1_1dpf_1_1LabelSpace.md#classansys_1_1dpf_1_1LabelSpace) const & **labels**: [in] [Label](structansys_1_1dpf_1_1Label.md#structansys_1_1dpf_1_1Label) space for whict to get scopings.

**Return type**: std::vector< [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping) >

<a id="classansys_1_1dpf_1_1ScopingsContainer_1a36613df121b439ec8a00fdf38922bd47"></a>
### Function getScopingsIndices

![][public]
![][const]

```cpp
std::vector<dp_index> ansys::dpf::ScopingsContainer::getScopingsIndices(LabelSpace const &lab_space) const
```



**Returns**:

[Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping) indices for scopings given by [LabelSpace](classansys_1_1dpf_1_1LabelSpace.md#classansys_1_1dpf_1_1LabelSpace)



**Parameters**:

* [LabelSpace](classansys_1_1dpf_1_1LabelSpace.md#classansys_1_1dpf_1_1LabelSpace) const & **lab_space**: [in] [LabelSpace](classansys_1_1dpf_1_1LabelSpace.md#classansys_1_1dpf_1_1LabelSpace) defining scopings for which to get indices.

**Return type**: std::vector< [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) >

<a id="classansys_1_1dpf_1_1ScopingsContainer_1a72ac39c1f6bd56ac3ebe624369b3249f"></a>
### Function getScoping

![][public]
![][const]

```cpp
Scoping ansys::dpf::ScopingsContainer::getScoping(LabelSpace const &labels) const
```



**Returns**:

First scoping for given label space.



**Parameters**:

* [LabelSpace](classansys_1_1dpf_1_1LabelSpace.md#classansys_1_1dpf_1_1LabelSpace) const & **labels**: [in] [Label](structansys_1_1dpf_1_1Label.md#structansys_1_1dpf_1_1Label) space for which to get first scoping.

**Return type**: [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping)

<a id="classansys_1_1dpf_1_1ScopingsContainer_1a190cffc6c97644bd0fb4c8e1278dcde1"></a>
### Function labels

![][public]
![][const]

```cpp
std::vector<std::string> ansys::dpf::ScopingsContainer::labels() const
```



**Returns**:

Vector of labels for scoping container.



**Return type**: std::vector< std::string >

<a id="classansys_1_1dpf_1_1ScopingsContainer_1a989ff8e9da5f347ef75dbdcce9a9e6e1"></a>
### Function getLabelSpace

![][public]
![][const]

```cpp
LabelSpace ansys::dpf::ScopingsContainer::getLabelSpace(dp_index index) const
```



**Returns**:

[Label](structansys_1_1dpf_1_1Label.md#structansys_1_1dpf_1_1Label) space for given index into scoping container.



**Parameters**:

* [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) **index**: [in] Index for which to get label space.

**Return type**: [LabelSpace](classansys_1_1dpf_1_1LabelSpace.md#classansys_1_1dpf_1_1LabelSpace)

<a id="classansys_1_1dpf_1_1ScopingsContainer_1ab0054773938a4a4a05a2eee3b8b11e30"></a>
### Function hasLabel

![][public]
![][const]

```cpp
bool ansys::dpf::ScopingsContainer::hasLabel(std::string const &label) const
```



**Returns**:

Indication if given label exists withing scoping container.



**Parameters**:

* std::string const & **label**: [in] [Label](structansys_1_1dpf_1_1Label.md#structansys_1_1dpf_1_1Label) for which to check existence.

**Return type**: bool

<a id="classansys_1_1dpf_1_1ScopingsContainer_1a9b5034eb9b32f5c174bce48ea95fd5d5"></a>
### Function labelScoping

![][public]
![][const]

```cpp
Scoping ansys::dpf::ScopingsContainer::labelScoping(std::string const &label) const
```

@ return [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping) for given label.





**Parameters**:

* std::string const & **label**: [in] [Label](structansys_1_1dpf_1_1Label.md#structansys_1_1dpf_1_1Label) for which to get scoping.

**Return type**: [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping)

<a id="classansys_1_1dpf_1_1ScopingsContainer_1a937781f3a15cc04f81d38e290eb348e3"></a>
### Function createSubScopingsContainer

![][public]
![][const]

```cpp
ScopingsContainer ansys::dpf::ScopingsContainer::createSubScopingsContainer(LabelSpace const &lab_space) const
```



Create a new [ScopingsContainer](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer) with all the scopings corresponding to the label space in input



**Parameters**:

* [LabelSpace](classansys_1_1dpf_1_1LabelSpace.md#classansys_1_1dpf_1_1LabelSpace) const & **lab_space**: [in] [Label](structansys_1_1dpf_1_1Label.md#structansys_1_1dpf_1_1Label) space for which to create new scopings container.

**Return type**: [ScopingsContainer](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer)

<a id="classansys_1_1dpf_1_1ScopingsContainer_1adce27b49797d1004950fb3015d3d5fee"></a>
### Function name

![][public]
![][const]

```cpp
std::string ansys::dpf::ScopingsContainer::name() const
```



**Returns**:

Name of scopings container.



**Return type**: std::string

<a id="classansys_1_1dpf_1_1ScopingsContainer_1a19242b422fe19242ac71e678f84569e7"></a>
### Function setName

![][public]

```cpp
void ansys::dpf::ScopingsContainer::setName(std::string name)
```



Set name of scopings container.



**Parameters**:

* std::string **name**: [in] Name for scopings container.

**Return type**: void

<a id="classansys_1_1dpf_1_1ScopingsContainer_1ad3f754bfb43dc2624bdf35314deb9f71"></a>
### Function id

![][public]
![][const]

```cpp
dp_id ansys::dpf::ScopingsContainer::id() const
```



**Returns**:

Id of scopings container.



**Return type**: [dp\_id](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ab4574c9af3f2bb8011da7d1f4c8da20e)

<a id="classansys_1_1dpf_1_1ScopingsContainer_1a2318b0cfaf7a88b434205b9fe2086b07"></a>
### Function setId

![][public]

```cpp
void ansys::dpf::ScopingsContainer::setId(dp_id id)
```



Set Id of scopings container.



**Parameters**:

* [dp\_id](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ab4574c9af3f2bb8011da7d1f4c8da20e) **id**: [in] Ids for scopings container.

**Return type**: void

<a id="classansys_1_1dpf_1_1ScopingsContainer_1a223fbc11c3fb729488a5f33772b2b2cf"></a>
### Function deep\_copy

![][public]
![][const]

```cpp
ScopingsContainer ansys::dpf::ScopingsContainer::deep_copy(ansys::dpf::Client const *const client=nullptr) const
```



Create a new [ScopingsContainer](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer) on a server by copying all the data of this [ScopingsContainer](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer).



**Parameters**:

* [ansys::dpf::Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client** = nullptr : [in] [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) instance designating the IP, port and protocol to use.

**Return type**: [ScopingsContainer](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer)

## Public static functions

<a id="classansys_1_1dpf_1_1ScopingsContainer_1a915d28f8d3b7869182ca79f9c4269b4c"></a>
### Function emptyScopingsContainer

![][public]
![][static]

```cpp
static ScopingsContainer ansys::dpf::ScopingsContainer::emptyScopingsContainer()
```



Create an empty scopings container. 
**Returns**:

Empty [ScopingsContainer](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer).



**Return type**: [ScopingsContainer](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer)

**TODO**:

* includes {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)