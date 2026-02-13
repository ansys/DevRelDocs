<a id="classansys_1_1dpf_1_1Field"></a>
# Class ansys::dpf::Field

![][C++]
![][public]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 2083)

Data for an entity.

The field is the main simulation data container. In numerical simulations, results data are defined by values associated to entities (scoping), and these entities are a subset of a model (support). In DPF, field data is always associated to its scoping and support, making the field a self-describing piece of data. A field is also defined by its dimensionnality, unit, location... A field can for example, describe a displacement vector or norm, stresses and strains tensors, stresses and strains equivalent, min max over time of any result... It can be defined on a complete model or just on certain entities of the model thanks to its scoping. The data is stored as a vector of double values and each elementary entity has a number of components (thanks to the dimensionality, a displacement will have 3 components, a symmetrical stress matrix 6...)

**Inherits from**:

* [ansys::dpf::DpfTypes](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes)

## Members

* [addStringProperty](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1afe00866305c1af63e4a6114aafe0c7ad)
* [callAPI](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1aea34d37e0c080126eff70db34bf46597)
* [cloneToCustomTypeField](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a76080a2fc73427169d0cb8f858d585c1)
* [cloneToField](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1ad7dbbe599698d4f11f40c815399f74e1)
* [cloneToPropertyField](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a5770853a69bd98d4c4555338f3ab3f15)
* [copy\_to\_Tfield](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1ad845327f6d34217f3342db45ef07d193)
* [createFieldWithTransformation](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a6770fd347138639cf36ff4a58d6b527b)
* [data](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a0967a8c6cee105a679dd1151a5d41004)
* [data](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1ad435429e8f1b152c7b4dad665665d9a4)
* [dataPointer](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a47656e1ead80a6f2cac7c21266429212)
* [dataSize](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a9bb7ac154ee6720cbb98b1c09e056942)
* [deep\_copy](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1ad91f3c235727ec55359488edd877ba9f)
* [describe](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a9977945710983bc03d2940fa007847b2)
* [empty](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a39cd546c42518e2332be8f287db95459)
* [emptyField](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a5b60dee96313f0f9791c11e1c7f58d5b)
* [entityData](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a1312be4b895a62a391eb66865897d27c)
* [entityData](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a025c29d3369376e0b22bcfb098a12776)
* [entityDataById](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a50ed01d59770f646c41777d496e0ff9c)
* [entityDataById](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a076c79e9088dc22be2e2a5ccb23aa683)
* [entityId](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1ad183afaa6ffbe34608e271e2c2c05f86)
* [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a160f89b2fb0a4a4d825b710a91bcd427)
* [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a5b349cc76039499cc2e45a4b59ff391c)
* [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a1a7812deadb92b60a8ad382111793e55)
* [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a613eb66562508f1a4bf9d60cbda5f51e)
* [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1abf1d82af297ab49ec938a14f150cc944)
* [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a5db1f40d3cdd081054924a3e931130be)
* [fieldDefinition](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a860e65caa16f612746ad116429282fd3)
* [fillCursor](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a96f5eeb13fb81117d3a096e5da245eab)
* [getClient](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a968afd9daa0b0f13b65a2ac61369d73a)
* [getData](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a3acedce4650d3f5671aa1dec3bba92ad)
* [getHeaderAsDataTree](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a1cc58effe3891d4767c6b92c4b745c65)
* [getStringProperty](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1ad6b1721493b8ecb05ee4b49729422cb0)
* [hasBeenMovedLocally](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a1a5634202c15404b6b24e8f50e51cb66)
* [hasInternalObject](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1ae198f89868d85c7db6dc1a934a1d3c15)
* [identicalPointers](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a89f7fdf190bfa038716dfe935de0600f)
* [isOnCommonAPI](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a9f9789ff61cc9d400a2a344830706b73)
* [isSameObject](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1aa64d5f8fcd7d85ad6ebf708494dbefd7)
* [name](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a64744679ebb47624268eb77552dac2c1)
* [numberOfComponents](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a70f7cda2d633297489b91de6761fd625)
* [numberOfElementaryData](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1aad232d58b75a9171de077b48865ef317)
* [numberOfElementaryDataByEntityId](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1aacac972372720f98b3ae69c296e80c5c)
* [numberOfElementaryDataByEntityIndex](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1ae1f8f67e890a35211cbc6b260598731c)
* [numberOfEntities](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1aad1f933384be1117a1338c0563cdefc0)
* [operator=](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a3cedbbb5ad9cf1e8ee8a99ddb537c5c1)
* [operator=](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a19e14878bec337b8a2ae8b5dcfc6b108)
* [push\_back](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a5b717ed309ddf287134905f71ada833b)
* [push\_back](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1aae349d3de14b42f8b238f194db139fbc)
* [push\_back](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1ab387a8da1a2dc0ea0f94ba7c9cc4419f)
* [reserve](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a3ac63a716581db77e88fa898befb1139)
* [resize](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a83962ecd81cbcbf54fde2d101ec01106)
* [resizeDataPointer](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a0f6abc999f38f54dfeaa144e996d3830)
* [scoping](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1aa16920741c1432c16e46ec6da26b3f04)
* [setData](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a9f7828d92496843cc5f15ee9e32f6c4a)
* [setData](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1ab53cf7a45c6c86b630674a1ee8935612)
* [setDataPointer](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1ae41503c5a4a91ae422b359234fb30363)
* [setDataPointer](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a9079f65aeb2e8b685d554f83826d45b8)
* [setFieldDefinition](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a471c3f541458acc9c05dfb019a99abb3)
* [setHeaderAsDataTree](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a4bb1c90dba9d0d32c370aa9d4b74fe84)
* [setName](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a79553d0764c52a5b8162c3ba4e61b97b)
* [setScoping](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a5220cacdfcd50fca2d5108734e1432df)
* [setSupport](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1ab71f825765a7ce1b37373443917ec23e)
* [setSupport](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a14d300919db7ae24a917af9e1262cea3)
* [setSupport](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1ae846597f402a69d4d78d5c8b5e80d219)
* [support](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a773481e9f7efb04d74c72be914b317d6)
* [~DpfTypes](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1ab7c83b6ea160c2b115e056f6c312112f)
* [~Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1ad4e2524e104248f824921d6755daa36a)

## Friends

## Private functions

## Public functions

<a id="classansys_1_1dpf_1_1Field_1a5b349cc76039499cc2e45a4b59ff391c"></a>
### Function Field

![][public]

```cpp
ansys::dpf::Field::Field(int reserved_number_of_entity=0, const std::vector< int > &dimensions={ 1 }, const Location &loc=locations::nodal)
```

Create a group of data with given dimensions and locations.

**Parameters**:

* int **reserved_number_of_entity** = 0 : [in] Number of entities.
* const std::vector< int > & **dimensions** = { 1 } : [in] Dimension of each entity.
* const [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location) & **loc** = [locations::nodal](structansys_1_1dpf_1_1locations.md#structansys_1_1dpf_1_1locations_1aa4e1967b0838d8597200c606c8564d29) : [in] [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location) of entities.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::Field"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1a1a7812deadb92b60a8ad382111793e55"></a>
### Function Field

![][public]

```cpp
ansys::dpf::Field::Field(Client const *const client, int reserved_number_of_entity=0, const std::vector< int > &dimensions={ 1 }, const Location &loc=locations::nodal)
```

Create a group of data with given dimensions and locations on a server.

**Parameters**:

* [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client**: [in] Remote client.
* int **reserved_number_of_entity** = 0 : [in] Number of entities.
* const std::vector< int > & **dimensions** = { 1 } : [in] Dimension of each entity.
* const [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location) & **loc** = [locations::nodal](structansys_1_1dpf_1_1locations.md#structansys_1_1dpf_1_1locations_1aa4e1967b0838d8597200c606c8564d29) : [in] [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location) of entities.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::Field"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1a613eb66562508f1a4bf9d60cbda5f51e"></a>
### Function Field

![][public]

```cpp
ansys::dpf::Field::Field(int id, Client const *const client)
```

Retrieve an existing instance of [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) on a server.

**Parameters**:

* int **id**: [in] Id of the [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) object on the server's database.
* [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client**: [in] [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) instance designating the IP, port and protocol to use.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::Field"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1ad4e2524e104248f824921d6755daa36a"></a>
### Function ~Field

![][public]

```cpp
virtual ansys::dpf::Field::~Field()
```

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::~Field"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1abf1d82af297ab49ec938a14f150cc944"></a>
### Function Field

![][public]

```cpp
ansys::dpf::Field::Field(Field const &)
```

**Parameters**:

* Field const &

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::Field"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1a5db1f40d3cdd081054924a3e931130be"></a>
### Function Field

![][public]

```cpp
ansys::dpf::Field::Field(Field &&) noexcept
```

**Parameters**:

* Field &&

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::Field"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1a3cedbbb5ad9cf1e8ee8a99ddb537c5c1"></a>
### Function operator=

![][public]

```cpp
Field & ansys::dpf::Field::operator=(Field const &)
```

**Parameters**:

* Field const &

**Return type**: Field &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::operator="}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1a19e14878bec337b8a2ae8b5dcfc6b108"></a>
### Function operator=

![][public]

```cpp
Field & ansys::dpf::Field::operator=(Field &&) noexcept
```

**Parameters**:

* Field &&

**Return type**: Field &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::operator="}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1a89f7fdf190bfa038716dfe935de0600f"></a>
### Function identicalPointers

![][public]
![][const]

```cpp
bool ansys::dpf::Field::identicalPointers(Field const &f) const
```

Compare field with input field f.

**Parameters**:

* Field const & **f**: [in] [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) with which to compare.

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::identicalPointers"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1a70f7cda2d633297489b91de6761fd625"></a>
### Function numberOfComponents

![][public]
![][const]

```cpp
dp_int ansys::dpf::Field::numberOfComponents() const
```

**Returns**:

Number of components in the elementary data.

**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::numberOfComponents"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1aad1f933384be1117a1338c0563cdefc0"></a>
### Function numberOfEntities

![][public]
![][const]

```cpp
dp_int ansys::dpf::Field::numberOfEntities() const
```

**Returns**:

Number of entities in the [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field). Only implemented for in process udage. For gRPC usage, use [scoping()](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1aa16920741c1432c16e46ec6da26b3f04).size().

**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::numberOfEntities"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1aad232d58b75a9171de077b48865ef317"></a>
### Function numberOfElementaryData

![][public]
![][const]

```cpp
dp_int ansys::dpf::Field::numberOfElementaryData() const
```

**Returns**:

Number of elementary data (size = number of components) contained in the [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field).

**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::numberOfElementaryData"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1ae1f8f67e890a35211cbc6b260598731c"></a>
### Function numberOfElementaryDataByEntityIndex

![][public]
![][const]

```cpp
dp_int ansys::dpf::Field::numberOfElementaryDataByEntityIndex(dp_int entityIndex) const
```

**Returns**:

Number of elementary data by entity index.

**Parameters**:

* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **entityIndex**

**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::numberOfElementaryDataByEntityIndex"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1aacac972372720f98b3ae69c296e80c5c"></a>
### Function numberOfElementaryDataByEntityId

![][public]
![][const]

```cpp
dp_int ansys::dpf::Field::numberOfElementaryDataByEntityId(dp_int entityId) const
```

**Returns**:

Number of elementary data by entity id.

**Parameters**:

* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **entityId**

**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::numberOfElementaryDataByEntityId"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1a9bb7ac154ee6720cbb98b1c09e056942"></a>
### Function dataSize

![][public]
![][const]

```cpp
dp_int ansys::dpf::Field::dataSize() const
```

**Returns**:

Size of the data container.

**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::dataSize"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1a64744679ebb47624268eb77552dac2c1"></a>
### Function name

![][public]
![][const]

```cpp
std::string ansys::dpf::Field::name() const
```

**Returns**:

Name of [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field).

**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::name"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1a79553d0764c52a5b8162c3ba4e61b97b"></a>
### Function setName

![][public]

```cpp
void ansys::dpf::Field::setName(const std::string &name)
```

Set name of [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field).

**Parameters**:

* const std::string & **name**: [in] New name.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::setName"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1afe00866305c1af63e4a6114aafe0c7ad"></a>
### Function addStringProperty

![][public]
![][const]

```cpp
void ansys::dpf::Field::addStringProperty(const char *key, const char *sProp) const
```

Add property of given key and string value. If key is already set, then value is updated with sProp.

**Parameters**:

* const char * **key**
* const char * **sProp**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::addStringProperty"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1ad6b1721493b8ecb05ee4b49729422cb0"></a>
### Function getStringProperty

![][public]
![][const]

```cpp
bool ansys::dpf::Field::getStringProperty(const char *key, std::string &sProp) const
```

**Returns**:

True if property of given key is set. Sprop is updated with the property's value.

**Parameters**:

* const char * **key**
* std::string & **sProp**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::getStringProperty"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1a0967a8c6cee105a679dd1151a5d41004"></a>
### Function data

![][public]
![][const]

```cpp
dp_double *const ansys::dpf::Field::data(int &size) const
```

**Returns**:

Pointer to data array.

**Parameters**:

* int & **size**: [out] Size of returned data array.

**Return type**: [dp\_double](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1acb480013bfed185b5e34a0bdcb0e3790) *const

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::data"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1ad435429e8f1b152c7b4dad665665d9a4"></a>
### Function data

![][public]
![][const]

```cpp
DpfVector< double > ansys::dpf::Field::data() const
```

**Returns**:

[DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) of data array.

**Return type**: DpfVector< double >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::data"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1a47656e1ead80a6f2cac7c21266429212"></a>
### Function dataPointer

![][public]
![][const]

```cpp
DpfVector< int > ansys::dpf::Field::dataPointer() const
```

**Returns**:

[DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) of data pointer array.

**Return type**: DpfVector< int >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::dataPointer"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1a3acedce4650d3f5671aa1dec3bba92ad"></a>
### Function getData

![][public]
![][const]

```cpp
void ansys::dpf::Field::getData(std::vector< dp_double > &data_to_fill) const
```

Copy the data for all entities in a vector of double.

**Parameters**:

* std::vector< [dp\_double](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1acb480013bfed185b5e34a0bdcb0e3790) > & **data_to_fill**: [out] Vector of data for all entities.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::getData"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1a1312be4b895a62a391eb66865897d27c"></a>
### Function entityData

![][public]
![][const]

```cpp
dp_double *const ansys::dpf::Field::entityData(dp_index entity_index, dp_int &size) const
```

**Returns**:

Pointer to data array of an entity, by index.

**Parameters**:

* [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) **entity_index**: [in] Index of entity for which to get data.
* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) & **size**: [out] Size of returned data array.

**Return type**: [dp\_double](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1acb480013bfed185b5e34a0bdcb0e3790) *const

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::entityData"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1a025c29d3369376e0b22bcfb098a12776"></a>
### Function entityData

![][public]
![][const]

```cpp
void ansys::dpf::Field::entityData(dp_index entity_index, DpfVector< double > &data) const
```

**Returns**:

[DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) of data array of an entity, by index.

**Parameters**:

* [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) **entity_index**: [in] Index of entity for which to get data.
* DpfVector< double > & **data**: [out] Pointer to the data.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::entityData"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1a50ed01d59770f646c41777d496e0ff9c"></a>
### Function entityDataById

![][public]
![][const]

```cpp
dp_double *const ansys::dpf::Field::entityDataById(dp_id entity_id, dp_int &size) const
```

**Returns**:

Pointer to data array of an entity, by id.

**Parameters**:

* [dp\_id](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ab4574c9af3f2bb8011da7d1f4c8da20e) **entity_id**: [in] Id of entity for which to get data.
* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) & **size**: [out] Size of returned data array.

**Return type**: [dp\_double](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1acb480013bfed185b5e34a0bdcb0e3790) *const

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::entityDataById"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1a076c79e9088dc22be2e2a5ccb23aa683"></a>
### Function entityDataById

![][public]
![][const]

```cpp
void ansys::dpf::Field::entityDataById(dp_id entity_id, DpfVector< double > &data) const
```

**Returns**:

[DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) of data array of an entity, by id.

**Parameters**:

* [dp\_id](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ab4574c9af3f2bb8011da7d1f4c8da20e) **entity_id**: [in] Id of entity for which to get data.
* DpfVector< double > & **data**: [out] Pointer to the data.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::entityDataById"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1ad183afaa6ffbe34608e271e2c2c05f86"></a>
### Function entityId

![][public]
![][const]

```cpp
dp_id ansys::dpf::Field::entityId(dp_index entity_index) const
```

**Returns**:

Entity id corresponding to a given entity index

**Parameters**:

* [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) **entity_index**: [in] Index of entity for which to get Id.

**Return type**: [dp\_id](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ab4574c9af3f2bb8011da7d1f4c8da20e)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::entityId"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1aa16920741c1432c16e46ec6da26b3f04"></a>
### Function scoping

![][public]
![][const]

```cpp
Scoping ansys::dpf::Field::scoping() const
```

**Returns**:

[Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping) of the field.

**Return type**: [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::scoping"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1a860e65caa16f612746ad116429282fd3"></a>
### Function fieldDefinition

![][public]
![][const]

```cpp
FieldDefinition ansys::dpf::Field::fieldDefinition() const
```

**Returns**:

[FieldDefinition](classansys_1_1dpf_1_1FieldDefinition.md#classansys_1_1dpf_1_1FieldDefinition) of the field.

**Return type**: [FieldDefinition](classansys_1_1dpf_1_1FieldDefinition.md#classansys_1_1dpf_1_1FieldDefinition)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::fieldDefinition"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1a773481e9f7efb04d74c72be914b317d6"></a>
### Function support

![][public]
![][const]

```cpp
Support ansys::dpf::Field::support() const
```

**Returns**:

[Support](classansys_1_1dpf_1_1Support.md#classansys_1_1dpf_1_1Support) of the field.

**Return type**: Support

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::support"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1a471c3f541458acc9c05dfb019a99abb3"></a>
### Function setFieldDefinition

![][public]

```cpp
void ansys::dpf::Field::setFieldDefinition(FieldDefinition const &f)
```

Set the [FieldDefinition](classansys_1_1dpf_1_1FieldDefinition.md#classansys_1_1dpf_1_1FieldDefinition).

**Parameters**:

* [FieldDefinition](classansys_1_1dpf_1_1FieldDefinition.md#classansys_1_1dpf_1_1FieldDefinition) const & **f**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::setFieldDefinition"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1a5220cacdfcd50fca2d5108734e1432df"></a>
### Function setScoping

![][public]

```cpp
void ansys::dpf::Field::setScoping(ansys::dpf::Scoping const &s)
```

set the [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping) of the [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field).

**Parameters**:

* [ansys::dpf::Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping) const & **s**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::setScoping"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1a9f7828d92496843cc5f15ee9e32f6c4a"></a>
### Function setData

![][public]

```cpp
void ansys::dpf::Field::setData(std::vector< double > const &data)
```

Set the data of the field.

**Parameters**:

* std::vector< double > const & **data**: [in] Vector of data.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::setData"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1ab53cf7a45c6c86b630674a1ee8935612"></a>
### Function setData

![][public]

```cpp
void ansys::dpf::Field::setData(double const *const data, int size)
```

Set the data of the field.

**Parameters**:

* double const *const **data**: [in] List of data.
* int **size**: [in] Size of list.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::setData"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1ae41503c5a4a91ae422b359234fb30363"></a>
### Function setDataPointer

![][public]
![][const]

```cpp
void ansys::dpf::Field::setDataPointer(std::vector< int > &data) const
```

Set the data pointer of the field.

**Parameters**:

* std::vector< int > & **data**: [in] Vector of data.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::setDataPointer"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1a9079f65aeb2e8b685d554f83826d45b8"></a>
### Function setDataPointer

![][public]
![][const]

```cpp
void ansys::dpf::Field::setDataPointer(int const *const data, int size) const
```

Set the data pointer of the field.

**Parameters**:

* int const *const **data**: [in] List of data.
* int **size**: [in] Size of list.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::setDataPointer"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1ab71f825765a7ce1b37373443917ec23e"></a>
### Function setSupport

![][public]

```cpp
void ansys::dpf::Field::setSupport(ansys::dpf::Support const &s)
```

Set the support of the [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field).

**Parameters**:

* [ansys::dpf::Support](classansys_1_1dpf_1_1Support.md#classansys_1_1dpf_1_1Support) const & **s**: [in] [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) to support.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::setSupport"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1a14d300919db7ae24a917af9e1262cea3"></a>
### Function setSupport

![][public]

```cpp
void ansys::dpf::Field::setSupport(ansys::dpf::TimeFreqSupport const &s)
```

Set the support of the [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field).

**Parameters**:

* [ansys::dpf::TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport) const & **s**: [in] [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport) to support.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::setSupport"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1ae846597f402a69d4d78d5c8b5e80d219"></a>
### Function setSupport

![][public]

```cpp
void ansys::dpf::Field::setSupport(ansys::dpf::MeshedRegion const &s)
```

Set the support of the [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field).

**Parameters**:

* [ansys::dpf::MeshedRegion](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion) const & **s**: [in] [MeshedRegion](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion) to support.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::setSupport"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1a3ac63a716581db77e88fa898befb1139"></a>
### Function reserve

![][public]

```cpp
void ansys::dpf::Field::reserve(dp_int number_of_entities, dp_int overall_size=0)
```

Reserve the [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field). Only implemented for in process udage. To reserve the size for gRPC usage, use the constructor.

**Parameters**:

* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **number_of_entities**: [in] Number of entities.
* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **overall_size** = 0 : [in] Total size of entity data.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::reserve"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1a83962ecd81cbcbf54fde2d101ec01106"></a>
### Function resize

![][public]

```cpp
void ansys::dpf::Field::resize(dp_int number_of_entities, dp_int overall_size)
```

Reserve the [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field).

**Parameters**:

* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **number_of_entities**: [in] Number of entities.
* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **overall_size**: [in] Total size of entity data.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::resize"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1a0f6abc999f38f54dfeaa144e996d3830"></a>
### Function resizeDataPointer

![][public]

```cpp
void ansys::dpf::Field::resizeDataPointer(dp_int number_of_entities)
```

[in] Number of entities

Resize the dataPointer array.

**Parameters**:

* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **number_of_entities**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::resizeDataPointer"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1a96f5eeb13fb81117d3a096e5da245eab"></a>
### Function fillCursor

![][public]
![][const]

```cpp
void ansys::dpf::Field::fillCursor(dp_index index, FieldCursor &f) const
```

Get data at a given index.

**Parameters**:

* [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) **index**: [in] Index of entity for which to get data.
* [FieldCursor](classansys_1_1dpf_1_1FieldCursor.md#classansys_1_1dpf_1_1FieldCursor) & **f**: [out] [FieldCursor](classansys_1_1dpf_1_1FieldCursor.md#classansys_1_1dpf_1_1FieldCursor) with which to contain data.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::fillCursor"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1a5b717ed309ddf287134905f71ada833b"></a>
### Function push\_back

![][public]

```cpp
void ansys::dpf::Field::push_back(dp_id entity_id, std::vector< dp_double > const &values)
```

Push back the entity data.

**Parameters**:

* [dp\_id](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ab4574c9af3f2bb8011da7d1f4c8da20e) **entity_id**: [in] Index of entity for which to push data.
* std::vector< [dp\_double](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1acb480013bfed185b5e34a0bdcb0e3790) > const & **values**: [in] Vector of data for entity.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::push_back"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1aae349d3de14b42f8b238f194db139fbc"></a>
### Function push\_back

![][public]

```cpp
void ansys::dpf::Field::push_back(dp_id entity_id, const dp_double *values, int size)
```

Push back the entity data.

**Parameters**:

* [dp\_id](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ab4574c9af3f2bb8011da7d1f4c8da20e) **entity_id**: [in] Index of entity for which to push data.
* const [dp\_double](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1acb480013bfed185b5e34a0bdcb0e3790) * **values**: [in] Ptr on data for entity.
* int **size**: [in] Number of entities.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::push_back"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1ab387a8da1a2dc0ea0f94ba7c9cc4419f"></a>
### Function push\_back

![][public]

```cpp
void ansys::dpf::Field::push_back(dp_id entity_id, dp_double *values, int size)
```

Push back the entity data.

**Parameters**:

* [dp\_id](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ab4574c9af3f2bb8011da7d1f4c8da20e) **entity_id**: [in] Index of entity for which to push data.
* [dp\_double](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1acb480013bfed185b5e34a0bdcb0e3790) * **values**: [in] Ptr on data for entity.
* int **size**: [in] Number of entities.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::push_back"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1ad91f3c235727ec55359488edd877ba9f"></a>
### Function deep\_copy

![][public]
![][const]

```cpp
Field ansys::dpf::Field::deep_copy(ansys::dpf::Client const *const client=nullptr) const
```

Make a deep copy on a given client.

**Parameters**:

* [ansys::dpf::Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client** = nullptr : [in] Remote client

**Return type**: Field

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::deep_copy"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1a76080a2fc73427169d0cb8f858d585c1"></a>
### Function cloneToCustomTypeField

![][public]
![][const]

```cpp
CustomTypeField ansys::dpf::Field::cloneToCustomTypeField(ansys::dpf::Client const *const client=nullptr, bool const copy_ids=true, bool const copy_data_ptr=true, bool const copy_support=true) const
```

Creates a new custom type field object from current field without its data.

**Parameters**:

* [ansys::dpf::Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client** = nullptr : [in] Remote client
* bool const **copy_ids** = true : [in] Boolean to decide if scoping ids are to be copied
* bool const **copy_data_ptr** = true : [in] Boolean to decide if data pointer is to be copied
* bool const **copy_support** = true : [in] Boolean to decide if the support reference is to be copied

**Return type**: [CustomTypeField](classansys_1_1dpf_1_1CustomTypeField.md#classansys_1_1dpf_1_1CustomTypeField)

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"typename UnitaryDataType"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::cloneToCustomTypeField"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1ad7dbbe599698d4f11f40c815399f74e1"></a>
### Function cloneToField

![][public]
![][const]

```cpp
Field ansys::dpf::Field::cloneToField(ansys::dpf::Client const *const client=nullptr, bool const copy_ids=true, bool const copy_data_ptr=true, bool const copy_support=true) const
```

Creates a new field object from current field without its data.

**Parameters**:

* [ansys::dpf::Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client** = nullptr : [in] Remote client
* bool const **copy_ids** = true : [in] Boolean to decide if scoping ids are to be copied
* bool const **copy_data_ptr** = true : [in] Boolean to decide if data pointer is to be copied
* bool const **copy_support** = true : [in] Boolean to decide if the support reference is to be copied

**Return type**: Field

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::cloneToField"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1a5770853a69bd98d4c4555338f3ab3f15"></a>
### Function cloneToPropertyField

![][public]
![][const]

```cpp
PropertyField ansys::dpf::Field::cloneToPropertyField(ansys::dpf::Client const *const client=nullptr, bool const copy_ids=true, bool const copy_data_ptr=true, bool const copy_support=true) const
```

Creates a new property field object from current field without its data.

**Parameters**:

* [ansys::dpf::Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client** = nullptr : [in] Remote client
* bool const **copy_ids** = true : [in] Boolean to decide if scoping ids are to be copied
* bool const **copy_data_ptr** = true : [in] Boolean to decide if data pointer is to be copied
* bool const **copy_support** = true : [in] Boolean to decide if the support reference is to be copied

**Return type**: [PropertyField](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::cloneToPropertyField"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1a1cc58effe3891d4767c6b92c4b745c65"></a>
### Function getHeaderAsDataTree

![][public]
![][const]

```cpp
DataTree ansys::dpf::Field::getHeaderAsDataTree() const
```

Get the header of the [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) as a [DataTree](classansys_1_1dpf_1_1DataTree.md#classansys_1_1dpf_1_1DataTree) object.

**Return type**: DataTree

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::getHeaderAsDataTree"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1a4bb1c90dba9d0d32c370aa9d4b74fe84"></a>
### Function setHeaderAsDataTree

![][public]

```cpp
void ansys::dpf::Field::setHeaderAsDataTree(const DataTree &datatree)
```

Set the header of the field using a [DataTree](classansys_1_1dpf_1_1DataTree.md#classansys_1_1dpf_1_1DataTree) object.

**Parameters**:

* const DataTree & **datatree**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::setHeaderAsDataTree"}]}`
-->

## Public static functions

<a id="classansys_1_1dpf_1_1Field_1a5b60dee96313f0f9791c11e1c7f58d5b"></a>
### Function emptyField

![][public]
![][static]

```cpp
static Field ansys::dpf::Field::emptyField()
```

Create an empty [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field). 
**Returns**:

Empty [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field).

**Return type**: Field

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::emptyField"}]}`
-->

<a id="classansys_1_1dpf_1_1Field_1a6770fd347138639cf36ff4a58d6b527b"></a>
### Function createFieldWithTransformation

![][public]
![][static]

```cpp
static Field ansys::dpf::Field::createFieldWithTransformation(Workflow transformation_wf, int reserved_number_of_entity=0, const std::vector< int > &dimensions={ 1 }, const Location &loc=locations::nodal, std::string const &input_name_to_connect="input_field", std::string const &output_name_to_eval="transformed_field")
```

Instantiate a [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) with Transformation. For each call to a getter, the workflow in input is connected this [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) to input_name_to_connect and the [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) output in output_name_to_eval is used as the getter instance.

**Parameters**:

* Workflow **transformation_wf**: [in] Transformation workflow.
* int **reserved_number_of_entity** = 0 : [in] Number of entities.
* const std::vector< int > & **dimensions** = { 1 } : [in] Dimension of each entity.
* const [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location) & **loc** = [locations::nodal](structansys_1_1dpf_1_1locations.md#structansys_1_1dpf_1_1locations_1aa4e1967b0838d8597200c606c8564d29) 
* std::string const & **input_name_to_connect** = "input_field" : [in] Name of the input of the workflow to connect. Should take a [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field).
* std::string const & **output_name_to_eval** = "transformed_field" : [in] Name of the output of the workflow to evaluate. Should return a [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field).

**Return type**: Field

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Field::createFieldWithTransformation"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)