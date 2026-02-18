# Class ansys::dpf::MeshesContainer

<a id="classansys-dpf-meshescontainer"></a>

![][C++]
![][public]



Contains a group of meshes. The meshes container is designed as a set of meshes ordered through labels and ids. Labels identify how the fields are filtered. The most common meshes container have the label "body" with ids corresponding to each body entity. 

**See also**: [MeshedRegion](classansys-dpf-meshedregion.md#classansys-dpf-meshedregion)

**Inherits from**:

* ansys::dpf::CollectionBase

## Members

* [add](classansys-dpf-meshescontainer.md#classansys-dpf-meshescontainer-1ad8a4ca6475e0eaa186a3fcd2ed8e131b)
* [addLabel](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a623a0b168512a4621fb7af8084f9872b)
* [addLabel](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1ac6ce7bc876d6a94a97996d5febba5116)
* [addLabels](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1ae97480559c14c59e830559582c1f2cd5)
* [at](classansys-dpf-meshescontainer.md#classansys-dpf-meshescontainer-1aa5faa82275582751a35b9f8f7fa52532)
* [at](classansys-dpf-meshescontainer.md#classansys-dpf-meshescontainer-1ab45cbc57a611d133effd85a07026ccf8)
* [callAPI](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1aea34d37e0c080126eff70db34bf46597)
* [createSubMeshesContainer](classansys-dpf-meshescontainer.md#classansys-dpf-meshescontainer-1afe73c105be73ed4fe598145f852552fe)
* [deep\_copy](classansys-dpf-meshescontainer.md#classansys-dpf-meshescontainer-1a4d6dc89fa32881ff246e53fc919f6d57)
* [describe](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a9977945710983bc03d2940fa007847b2)
* [empty](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a39cd546c42518e2332be8f287db95459)
* [emptyMeshesContainer](classansys-dpf-meshescontainer.md#classansys-dpf-meshescontainer-1a5adfd625ae0bbadf1ac7b46caed156cf)
* [getClient](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a968afd9daa0b0f13b65a2ac61369d73a)
* [getLabelSpace](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a66d62492d07889a95a5d10f9d827cd11)
* [getMatchingMesh](classansys-dpf-meshescontainer.md#classansys-dpf-meshescontainer-1a6e8fcefe0d84508ba020c3cc53df1019)
* [getMatchingMeshIndices](classansys-dpf-meshescontainer.md#classansys-dpf-meshescontainer-1a00771e383d8202b17b14f208cdba10a3)
* [getMesh](classansys-dpf-meshescontainer.md#classansys-dpf-meshescontainer-1a9b94613788b1ced87b9a1ad5b94dcefd)
* [getMeshes](classansys-dpf-meshescontainer.md#classansys-dpf-meshescontainer-1a2be495164acdc7891bc8efa173d6ad60)
* [getMeshesIndices](classansys-dpf-meshescontainer.md#classansys-dpf-meshescontainer-1a699c93ca9f77f9a96f4aa4a8744c1596)
* [getSizeFor](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1aab65999d65acb4eab6aa7375266e5456)
* [hasBeenMovedLocally](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a1a5634202c15404b6b24e8f50e51cb66)
* [hasInternalObject](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1ae198f89868d85c7db6dc1a934a1d3c15)
* [hasLabel](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a82ac9433fd3963b37b07989ef05de331)
* [id](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a5e8d2dd8b9b6cf273985ce3ead392830)
* [isOnCommonAPI](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a9f9789ff61cc9d400a2a344830706b73)
* [isSameObject](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1aa64d5f8fcd7d85ad6ebf708494dbefd7)
* [labels](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a2c1bb3718e1a96d3f40b64794eb25f91)
* [labelScoping](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1ac61aef82ffe249c95dd10cf40de7c910)
* [MeshesContainer](classansys-dpf-meshescontainer.md#classansys-dpf-meshescontainer-1aa91619cdbf37ba4d2425d9d3e80516a1)
* [MeshesContainer](classansys-dpf-meshescontainer.md#classansys-dpf-meshescontainer-1ab5d10a6e0af1de794c5dd5ff5274a56c)
* [MeshesContainer](classansys-dpf-meshescontainer.md#classansys-dpf-meshescontainer-1a1950bf0757d24a5441b3b0326454ab6e)
* [MeshesContainer](classansys-dpf-meshescontainer.md#classansys-dpf-meshescontainer-1aa4c802341a32f409bface24c08750256)
* [MeshesContainer](classansys-dpf-meshescontainer.md#classansys-dpf-meshescontainer-1a0ac20f2c12dfe98d977cb6bb5c7a85fa)
* [MeshesContainer](classansys-dpf-meshescontainer.md#classansys-dpf-meshescontainer-1abb7d8aa6a81104550acd750be0341d52)
* [MeshesContainer](classansys-dpf-meshescontainer.md#classansys-dpf-meshescontainer-1ad5852e1110c3ac20a9e139a68a54bff4)
* [name](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a691450ab7c89db80f39d6bb2d10eace4)
* [operator=](classansys-dpf-meshescontainer.md#classansys-dpf-meshescontainer-1afe5811d03325be342ac58977d37ab0d0)
* [operator=](classansys-dpf-meshescontainer.md#classansys-dpf-meshescontainer-1a64a2fe24398371036df24ec2b5b26027)
* [operator[]](classansys-dpf-meshescontainer.md#classansys-dpf-meshescontainer-1a7a7b3e5a05bbd093a14531d846c0557a)
* [reserve](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a98ab98c9a6b91b886fd600ed7d9e633b)
* [resize](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1ac88664d3e1d22abb74a95c8223b1e771)
* [setId](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a93ebbfe9396dd1c4f447e799db6cbf3b)
* [setName](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a44394f964c6130dcbaed446cec3b0197)
* [setSupport](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1ae6f7683496d153ed944856d42b97dc82)
* [setSupport](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1ada2a037068417557fd7d410577a7fbb9)
* [size](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a69e6878d2d691807f8a45ddfbda42f9e)
* [support](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a9830a03b992af391bf03acad90eac372)
* [update](classansys-dpf-meshescontainer.md#classansys-dpf-meshescontainer-1ad9bf573f6faf5c3d6a69509acebfd029)
* [~CollectionBase](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a99e04439d35f26b89f4d66813d74035b)
* [~DpfTypes](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1ab7c83b6ea160c2b115e056f6c312112f)
* [~MeshesContainer](classansys-dpf-meshescontainer.md#classansys-dpf-meshescontainer-1a05109019be329e40c7db78d231eef9ad)

## Friends

## Public functions

<a id="classansys-dpf-meshescontainer-1aa91619cdbf37ba4d2425d9d3e80516a1"></a>
### Function MeshesContainer

![][public]


```cpp
ansys::dpf::MeshesContainer::MeshesContainer()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshesContainer::MeshesContainer"}]}`
-->

<a id="classansys-dpf-meshescontainer-1a05109019be329e40c7db78d231eef9ad"></a>
### Function ~MeshesContainer

![][public]


```cpp
virtual ansys::dpf::MeshesContainer::~MeshesContainer()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshesContainer::~MeshesContainer"}]}`
-->

<a id="classansys-dpf-meshescontainer-1ab5d10a6e0af1de794c5dd5ff5274a56c"></a>
### Function MeshesContainer

![][public]


```cpp
ansys::dpf::MeshesContainer::MeshesContainer(MeshesContainer const &)
```








**Parameters**:

* MeshesContainer const &

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshesContainer::MeshesContainer"}]}`
-->

<a id="classansys-dpf-meshescontainer-1a1950bf0757d24a5441b3b0326454ab6e"></a>
### Function MeshesContainer

![][public]


```cpp
ansys::dpf::MeshesContainer::MeshesContainer(MeshesContainer &&) noexcept
```








**Parameters**:

* MeshesContainer &&

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshesContainer::MeshesContainer"}]}`
-->

<a id="classansys-dpf-meshescontainer-1aa4c802341a32f409bface24c08750256"></a>
### Function MeshesContainer

![][public]


```cpp
ansys::dpf::MeshesContainer::MeshesContainer(Client const *const client)
```




Create a new meshes container on a server.



**Parameters**:

* [Client](classansys-dpf-client.md#classansys-dpf-client) const *const **client**: [in] [Client](classansys-dpf-client.md#classansys-dpf-client) instance designating the IP, port and protocol to use.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshesContainer::MeshesContainer"}]}`
-->

<a id="classansys-dpf-meshescontainer-1a0ac20f2c12dfe98d977cb6bb5c7a85fa"></a>
### Function MeshesContainer

![][public]


```cpp
ansys::dpf::MeshesContainer::MeshesContainer(Client const *const client, std::vector< std::string > const &labels)
```




Create a collection of meshes with the given labels on a server.



**Parameters**:

* [Client](classansys-dpf-client.md#classansys-dpf-client) const *const **client**: [in] [Client](classansys-dpf-client.md#classansys-dpf-client) instance designating the IP, port and protocol to use.
* std::vector< std::string > const & **labels**: [in] Labels for meshes.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshesContainer::MeshesContainer"}]}`
-->

<a id="classansys-dpf-meshescontainer-1abb7d8aa6a81104550acd750be0341d52"></a>
### Function MeshesContainer

![][public]


```cpp
ansys::dpf::MeshesContainer::MeshesContainer(int id, Client const *const client)
```




Retrieve an existing instance of [MeshesContainer](classansys-dpf-meshescontainer.md#classansys-dpf-meshescontainer) on a server.



**Parameters**:

* int **id**: [in] Id of the [MeshesContainer](classansys-dpf-meshescontainer.md#classansys-dpf-meshescontainer) object on the server's database.
* [Client](classansys-dpf-client.md#classansys-dpf-client) const *const **client**: [in] [Client](classansys-dpf-client.md#classansys-dpf-client) instance designating the IP, port and protocol to use.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshesContainer::MeshesContainer"}]}`
-->

<a id="classansys-dpf-meshescontainer-1ad5852e1110c3ac20a9e139a68a54bff4"></a>
### Function MeshesContainer

![][public]


```cpp
ansys::dpf::MeshesContainer::MeshesContainer(std::vector< std::string > const &labels)
```




Create mesh container for a group of meshed regions with the given labels.



**Parameters**:

* std::vector< std::string > const & **labels**: [in] Labels for group of meshed regions.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshesContainer::MeshesContainer"}]}`
-->

<a id="classansys-dpf-meshescontainer-1afe5811d03325be342ac58977d37ab0d0"></a>
### Function operator=

![][public]


```cpp
MeshesContainer & ansys::dpf::MeshesContainer::operator=(MeshesContainer const &)
```








**Parameters**:

* MeshesContainer const &

**Return type**: MeshesContainer &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshesContainer::operator="}]}`
-->

<a id="classansys-dpf-meshescontainer-1a64a2fe24398371036df24ec2b5b26027"></a>
### Function operator=

![][public]


```cpp
MeshesContainer & ansys::dpf::MeshesContainer::operator=(MeshesContainer &&) noexcept
```








**Parameters**:

* MeshesContainer &&

**Return type**: MeshesContainer &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshesContainer::operator="}]}`
-->

<a id="classansys-dpf-meshescontainer-1a7a7b3e5a05bbd093a14531d846c0557a"></a>
### Function operator[]

![][public]


```cpp
MeshedRegion ansys::dpf::MeshesContainer::operator[](dp_int index)
```




**Returns**:

Meshed region for given index.



**Parameters**:

* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **index**: [in] Index of mesh within container.

**Return type**: [MeshedRegion](classansys-dpf-meshedregion.md#classansys-dpf-meshedregion)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshesContainer::operator[]"}]}`
-->

<a id="classansys-dpf-meshescontainer-1aa5faa82275582751a35b9f8f7fa52532"></a>
### Function at

![][public]


```cpp
MeshedRegion ansys::dpf::MeshesContainer::at(dp_index index)
```




**Returns**:

Meshed region for given index.



**Parameters**:

* [dp\_index](namespaceansys-dpf.md#namespaceansys-dpf-1a417548d1b705a9ba54ba9429afe68920) **index**: [in] Index of meshed region to get.

**Return type**: [MeshedRegion](classansys-dpf-meshedregion.md#classansys-dpf-meshedregion)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshesContainer::at"}]}`
-->

<a id="classansys-dpf-meshescontainer-1ab45cbc57a611d133effd85a07026ccf8"></a>
### Function at

![][public]
![][const]


```cpp
const MeshedRegion ansys::dpf::MeshesContainer::at(dp_index index) const
```




**Returns**:

Meshed region for given index.



**Parameters**:

* [dp\_index](namespaceansys-dpf.md#namespaceansys-dpf-1a417548d1b705a9ba54ba9429afe68920) **index**: [in] Index of meshed region to get.

**Return type**: const [MeshedRegion](classansys-dpf-meshedregion.md#classansys-dpf-meshedregion)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshesContainer::at"}]}`
-->

<a id="classansys-dpf-meshescontainer-1ad9bf573f6faf5c3d6a69509acebfd029"></a>
### Function update

![][public]


```cpp
void ansys::dpf::MeshesContainer::update(MeshedRegion &f, dp_index index)
```




Update a meshed region at index.



**Parameters**:

* [MeshedRegion](classansys-dpf-meshedregion.md#classansys-dpf-meshedregion) & **f**: [in] New meshed region.
* [dp\_index](namespaceansys-dpf.md#namespaceansys-dpf-1a417548d1b705a9ba54ba9429afe68920) **index**: [in] Index of meshed region to update.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshesContainer::update"}]}`
-->

<a id="classansys-dpf-meshescontainer-1ad8a4ca6475e0eaa186a3fcd2ed8e131b"></a>
### Function add

![][public]


```cpp
void ansys::dpf::MeshesContainer::add(LabelSpace const &labels, MeshedRegion const &f, bool can_replace=true)
```




Add meshed region with given label space.



**Parameters**:

* [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace) const & **labels**: [in] [Label](structansys-dpf-label.md#structansys-dpf-label) space for meshed region.
* [MeshedRegion](classansys-dpf-meshedregion.md#classansys-dpf-meshedregion) const & **f**: [in] Meshed region to add.
* bool **can_replace** = true : [in] if can_replace is false, then, the entity is pushed back without checking if the label space already exists.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshesContainer::add"}]}`
-->

<a id="classansys-dpf-meshescontainer-1a2be495164acdc7891bc8efa173d6ad60"></a>
### Function getMeshes

![][public]
![][const]


```cpp
std::vector< MeshedRegion > ansys::dpf::MeshesContainer::getMeshes(LabelSpace const &label_space) const
```




**Returns**:

Vector of meshed regions for given label space.



**Parameters**:

* [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace) const & **label_space**: [in] [Label](structansys-dpf-label.md#structansys-dpf-label) space for which to get meshed regions.

**Return type**: std::vector< [MeshedRegion](classansys-dpf-meshedregion.md#classansys-dpf-meshedregion) >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshesContainer::getMeshes"}]}`
-->

<a id="classansys-dpf-meshescontainer-1a9b94613788b1ced87b9a1ad5b94dcefd"></a>
### Function getMesh

![][public]
![][const]


```cpp
MeshedRegion ansys::dpf::MeshesContainer::getMesh(LabelSpace const &label_space) const
```




**Returns**:

First meshed region for given label space.



**Parameters**:

* [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace) const & **label_space**: [in] [Label](structansys-dpf-label.md#structansys-dpf-label) space for which to get meshed region.

**Return type**: [MeshedRegion](classansys-dpf-meshedregion.md#classansys-dpf-meshedregion)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshesContainer::getMesh"}]}`
-->

<a id="classansys-dpf-meshescontainer-1a699c93ca9f77f9a96f4aa4a8744c1596"></a>
### Function getMeshesIndices

![][public]
![][const]


```cpp
std::vector< int > ansys::dpf::MeshesContainer::getMeshesIndices(LabelSpace const &lab_space) const
```








**Parameters**:

* [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace) const & **lab_space**

**Return type**: std::vector< int >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshesContainer::getMeshesIndices"}]}`
-->

<a id="classansys-dpf-meshescontainer-1a6e8fcefe0d84508ba020c3cc53df1019"></a>
### Function getMatchingMesh

![][public]
![][const]


```cpp
MeshedRegion ansys::dpf::MeshesContainer::getMatchingMesh(LabelSpace const &label_space) const
```




**Returns**:

First matching Mesh for given label space.



**Parameters**:

* [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace) const & **label_space**: [in] [Label](structansys-dpf-label.md#structansys-dpf-label) space for which to get [Any](classansys-dpf-any.md#classansys-dpf-any).

**Return type**: [MeshedRegion](classansys-dpf-meshedregion.md#classansys-dpf-meshedregion)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshesContainer::getMatchingMesh"}]}`
-->

<a id="classansys-dpf-meshescontainer-1a00771e383d8202b17b14f208cdba10a3"></a>
### Function getMatchingMeshIndices

![][public]
![][const]


```cpp
DpfVector< dp_index > ansys::dpf::MeshesContainer::getMatchingMeshIndices(LabelSpace const &label_space) const
```




**Returns**:

Vector of matching Mesh to the given label space.



**Parameters**:

* [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace) const & **label_space**: [in] [Label](structansys-dpf-label.md#structansys-dpf-label) space for which to get entries.

**Return type**: [DpfVector](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector)< [dp\_index](namespaceansys-dpf.md#namespaceansys-dpf-1a417548d1b705a9ba54ba9429afe68920) >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshesContainer::getMatchingMeshIndices"}]}`
-->

<a id="classansys-dpf-meshescontainer-1afe73c105be73ed4fe598145f852552fe"></a>
### Function createSubMeshesContainer

![][public]
![][const]


```cpp
MeshesContainer ansys::dpf::MeshesContainer::createSubMeshesContainer(LabelSpace const &lab_space) const
```


create a [MeshesContainer](classansys-dpf-meshescontainer.md#classansys-dpf-meshescontainer) with all the meshes corresponding to the label space in input





**Parameters**:

* [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace) const & **lab_space**

**Return type**: MeshesContainer

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshesContainer::createSubMeshesContainer"}]}`
-->

<a id="classansys-dpf-meshescontainer-1a4d6dc89fa32881ff246e53fc919f6d57"></a>
### Function deep\_copy

![][public]
![][const]


```cpp
MeshesContainer ansys::dpf::MeshesContainer::deep_copy(ansys::dpf::Client const *const client=nullptr) const
```




Create a new [MeshesContainer](classansys-dpf-meshescontainer.md#classansys-dpf-meshescontainer) on a server by copying all the data of this [MeshesContainer](classansys-dpf-meshescontainer.md#classansys-dpf-meshescontainer).



**Parameters**:

* [ansys::dpf::Client](classansys-dpf-client.md#classansys-dpf-client) const *const **client** = nullptr : [in] [Client](classansys-dpf-client.md#classansys-dpf-client) instance designating the IP, port and protocol to use.

**Return type**: MeshesContainer

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshesContainer::deep_copy"}]}`
-->

## Public static functions

<a id="classansys-dpf-meshescontainer-1a5adfd625ae0bbadf1ac7b46caed156cf"></a>
### Function emptyMeshesContainer

![][public]
![][static]


```cpp
static MeshesContainer ansys::dpf::MeshesContainer::emptyMeshesContainer()
```




Create an empty mesh container. 
**Returns**:

Empty mesh container.



**Return type**: MeshesContainer

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshesContainer::emptyMeshesContainer"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)