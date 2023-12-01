<a id="classansys_1_1dpf_1_1Field"></a>
# Class ansys::dpf::Field

![][C++]
![][public]

**Definition**: `dpf\_api.h` (line 889)

Data for an entity.

The field is the main simulation data container. In numerical simulations, results data are defined by values associated to entities (scoping), and these entities are a subset of a model (support). In DPF, field data is always associated to its scoping and support, making the field a self-describing piece of data. A field is also defined by its dimensionnality, unit, location... A field can for example, describe a displacement vector or norm, stresses and strains tensors, stresses and strains equivalent, min max over time of any result... It can be defined on a complete model or just on certain entities of the model thanks to its scoping. The data is stored as a vector of double values and each elementary entity has a number of components (thanks to the dimensionality, a displacement will have 3 components, a symmetrical stress matrix 6...)

**Inherits from**:

* [ansys::dpf::DpfTypes](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes)

## Members

* [callAPI](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a1ef954a45b178eac4de68813168db6fb)
* [data](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a584929c333323b9925a42d80920a62ba)
* [data](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1addc53a0d6b469e1d7605450730e11691)
* [dataPointer](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a91f7584c46c4a4302880bfd47531977e)
* [dataSize](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a9bb7ac154ee6720cbb98b1c09e056942)
* [deep\_copy](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1aab82032844ca177841de8c3011dab297)
* [deep\_copy](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1aa838791f5e7d7a272b9fbe441d7e4a4f)
* [describe](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a9977945710983bc03d2940fa007847b2)
* [empty](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a39cd546c42518e2332be8f287db95459)
* [emptyField](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a5b60dee96313f0f9791c11e1c7f58d5b)
* [entityData](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a9301a0b087528fb3a66d5b73a456322c)
* [entityData](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a025c29d3369376e0b22bcfb098a12776)
* [entityDataById](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a73d17442fa66049936eb5363f79896db)
* [entityDataById](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a076c79e9088dc22be2e2a5ccb23aa683)
* [entityId](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1ad183afaa6ffbe34608e271e2c2c05f86)
* [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a160f89b2fb0a4a4d825b710a91bcd427)
* [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a5b349cc76039499cc2e45a4b59ff391c)
* [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a1a7812deadb92b60a8ad382111793e55)
* [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a613eb66562508f1a4bf9d60cbda5f51e)
* [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1abf1d82af297ab49ec938a14f150cc944)
* [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1aac8eeb1e52d0b92760d4b14a4a3e62df)
* [fieldDefinition](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a860e65caa16f612746ad116429282fd3)
* [fillCursor](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a96f5eeb13fb81117d3a096e5da245eab)
* [getClient](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a968afd9daa0b0f13b65a2ac61369d73a)
* [getData](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a3acedce4650d3f5671aa1dec3bba92ad)
* [hasBeenMovedLocally](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a1a5634202c15404b6b24e8f50e51cb66)
* [identicalPointers](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a89f7fdf190bfa038716dfe935de0600f)
* [isOnCommonAPI](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a9f9789ff61cc9d400a2a344830706b73)
* [isSameObject](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1aa64d5f8fcd7d85ad6ebf708494dbefd7)
* [name](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a64744679ebb47624268eb77552dac2c1)
* [numberOfComponents](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a70f7cda2d633297489b91de6761fd625)
* [numberOfElementaryData](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1aad232d58b75a9171de077b48865ef317)
* [numberOfElementaryDataByEntityId](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1aacac972372720f98b3ae69c296e80c5c)
* [numberOfElementaryDataByEntityIndex](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1ae1f8f67e890a35211cbc6b260598731c)
* [numberOfEntities](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1aad1f933384be1117a1338c0563cdefc0)
* [operator=](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1aadf1ee185014acab404c3d8ef9dc207c)
* [operator=](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1ae89bb5d349daa1a9675de384ae2cec78)
* [push\_back](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a5b717ed309ddf287134905f71ada833b)
* [push\_back](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1aae349d3de14b42f8b238f194db139fbc)
* [push\_back](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1ab387a8da1a2dc0ea0f94ba7c9cc4419f)
* [reserve](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a3ac63a716581db77e88fa898befb1139)
* [resize](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a83962ecd81cbcbf54fde2d101ec01106)
* [scoping](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1aa16920741c1432c16e46ec6da26b3f04)
* [setData](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a9f7828d92496843cc5f15ee9e32f6c4a)
* [setData](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1ab53cf7a45c6c86b630674a1ee8935612)
* [setDataPointer](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1ae41503c5a4a91ae422b359234fb30363)
* [setDataPointer](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a9079f65aeb2e8b685d554f83826d45b8)
* [setFieldDefinition](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a471c3f541458acc9c05dfb019a99abb3)
* [setName](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a79553d0764c52a5b8162c3ba4e61b97b)
* [setScoping](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a5220cacdfcd50fca2d5108734e1432df)
* [setSupport](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1ab71f825765a7ce1b37373443917ec23e)
* [setSupport](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a14d300919db7ae24a917af9e1262cea3)
* [setSupport](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1ae846597f402a69d4d78d5c8b5e80d219)
* [support](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1a773481e9f7efb04d74c72be914b317d6)
* [~DpfTypes](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1ab7c83b6ea160c2b115e056f6c312112f)
* [~Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field_1ad4e2524e104248f824921d6755daa36a)

## Friends

<a id="classansys_1_1dpf_1_1Field_1a33ff3f826991522d2e77c1c523f33e19"></a>
### Friend Operator

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 891)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Operator"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classansys_1_1dpf_1_1Operator"},"children":[{"type":"text","text":"Operator"}]}]},{"type":"text","text":"\n        "}]}

<a id="classansys_1_1dpf_1_1Field_1afa07847c7cb432b260e61a0c18025ba3"></a>
### Friend Workflow

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 892)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Workflow"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classansys_1_1dpf_1_1Workflow"},"children":[{"type":"text","text":"Workflow"}]}]},{"type":"text","text":"\n        "}]}

<a id="classansys_1_1dpf_1_1Field_1a59b32ce53d1637a6918ae5e1c16f4b02"></a>
### Friend FieldsContainer

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 893)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class FieldsContainer"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classansys_1_1dpf_1_1FieldsContainer"},"children":[{"type":"text","text":"FieldsContainer"}]}]},{"type":"text","text":"\n        "}]}

<a id="classansys_1_1dpf_1_1Field_1abb31806c269987c4a5e2a51f1f4d4d39"></a>
### Friend MeshedRegion

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 894)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class MeshedRegion"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classansys_1_1dpf_1_1MeshedRegion"},"children":[{"type":"text","text":"MeshedRegion"}]}]},{"type":"text","text":"\n        "}]}

<a id="classansys_1_1dpf_1_1Field_1a87ba90b4bbcd8d8baa7bf17c27fbdfae"></a>
### Friend TimeFreqSupport

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 895)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class TimeFreqSupport"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classansys_1_1dpf_1_1TimeFreqSupport"},"children":[{"type":"text","text":"TimeFreqSupport"}]}]},{"type":"text","text":"\n        "}]}

<a id="classansys_1_1dpf_1_1Field_1a81d95df60edf516a1de9878b780f8fb3"></a>
### Friend OperatorMain

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 896)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class OperatorMain"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classansys_1_1dpf_1_1OperatorMain"},"children":[{"type":"text","text":"OperatorMain"}]}]},{"type":"text","text":"\n        "}]}

<a id="classansys_1_1dpf_1_1Field_1a974f89847b7c842dc9a9c5ee97e7791d"></a>
### Friend Mapping

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 897)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Mapping"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classansys_1_1dpf_1_1Mapping"},"children":[{"type":"text","text":"Mapping"}]}]},{"type":"text","text":"\n        "}]}

<a id="classansys_1_1dpf_1_1Field_1a9820c685b67a3355c042bb0b3365d9e2"></a>
### Friend Any

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 898)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Any"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classansys_1_1dpf_1_1Any"},"children":[{"type":"text","text":"Any"}]}]},{"type":"text","text":"\n        "}]}

<a id="classansys_1_1dpf_1_1Field_1a4303ef65e3d088cbff0512dfbf3734ac"></a>
### Friend Support

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 899)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Support"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classansys_1_1dpf_1_1Support"},"children":[{"type":"text","text":"Support"}]}]},{"type":"text","text":"\n        "}]}

<a id="classansys_1_1dpf_1_1Field_1a8a8b42bcbba089cc2a997c65416c9038"></a>
### Friend GenericSupport

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 900)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class GenericSupport"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classansys_1_1dpf_1_1GenericSupport"},"children":[{"type":"text","text":"GenericSupport"}]}]},{"type":"text","text":"\n        "}]}

<a id="classansys_1_1dpf_1_1Field_1ad465d7b2f213af5e9c522d51658e74b9"></a>
### Friend CyclicSupport

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 901)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class CyclicSupport"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classansys_1_1dpf_1_1CyclicSupport"},"children":[{"type":"text","text":"CyclicSupport"}]}]},{"type":"text","text":"\n        "}]}

## Private functions

<a id="classansys_1_1dpf_1_1Field_1a160f89b2fb0a4a4d825b710a91bcd427"></a>
### Function Field

![][private]

```cpp
ansys::dpf::Field::Field(opaque::DpfInternalSharedObject *)
```







**Parameters**:

* opaque::DpfInternalSharedObject *

**Return type**: 

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

<a id="classansys_1_1dpf_1_1Field_1a613eb66562508f1a4bf9d60cbda5f51e"></a>
### Function Field

![][public]

```cpp
ansys::dpf::Field::Field(int id, Client const *const client)
```



Retrieve an existing instance of [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) on a server. <br/>



**Parameters**:

* int **id**: [in] Id of the [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) object on the server's database.
* [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client**: [in] [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) instance designating the IP, port and protocol to use.

**Return type**: 

<a id="classansys_1_1dpf_1_1Field_1ad4e2524e104248f824921d6755daa36a"></a>
### Function ~Field

![][public]

```cpp
virtual ansys::dpf::Field::~Field()
```







**Return type**: 

<a id="classansys_1_1dpf_1_1Field_1abf1d82af297ab49ec938a14f150cc944"></a>
### Function Field

![][public]

```cpp
ansys::dpf::Field::Field(Field const &)
```







**Parameters**:

* [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) const &

**Return type**: 

<a id="classansys_1_1dpf_1_1Field_1aac8eeb1e52d0b92760d4b14a4a3e62df"></a>
### Function Field

![][public]

```cpp
ansys::dpf::Field::Field(Field &&)
```







**Parameters**:

* [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) &&

**Return type**: 

<a id="classansys_1_1dpf_1_1Field_1aadf1ee185014acab404c3d8ef9dc207c"></a>
### Function operator=

![][public]

```cpp
Field& ansys::dpf::Field::operator=(Field const &)
```







**Parameters**:

* [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) const &

**Return type**: [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) &

<a id="classansys_1_1dpf_1_1Field_1ae89bb5d349daa1a9675de384ae2cec78"></a>
### Function operator=

![][public]

```cpp
Field& ansys::dpf::Field::operator=(Field &&)
```







**Parameters**:

* [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) &&

**Return type**: [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) &

<a id="classansys_1_1dpf_1_1Field_1a89f7fdf190bfa038716dfe935de0600f"></a>
### Function identicalPointers

![][public]
![][const]

```cpp
bool ansys::dpf::Field::identicalPointers(Field const &f) const
```



Compare field with input field f.



**Parameters**:

* [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) const & **f**: [in] [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) with which to compare.

**Return type**: bool

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

<a id="classansys_1_1dpf_1_1Field_1a584929c333323b9925a42d80920a62ba"></a>
### Function data

![][public]
![][const]

```cpp
dp_double* const ansys::dpf::Field::data(int &size) const
```



**Returns**:

Pointer to data array.



**Parameters**:

* int & **size**: [out] Size of returned data array.

**Return type**: [dp\_double](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1acb480013bfed185b5e34a0bdcb0e3790) *const

<a id="classansys_1_1dpf_1_1Field_1addc53a0d6b469e1d7605450730e11691"></a>
### Function data

![][public]
![][const]

```cpp
DpfVector<double> ansys::dpf::Field::data() const
```



**Returns**:

[DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) of data array.



**Return type**: [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector)< double >

<a id="classansys_1_1dpf_1_1Field_1a91f7584c46c4a4302880bfd47531977e"></a>
### Function dataPointer

![][public]
![][const]

```cpp
DpfVector<int> ansys::dpf::Field::dataPointer() const
```



**Returns**:

[DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) of data pointer array.



**Return type**: [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector)< int >

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

<a id="classansys_1_1dpf_1_1Field_1a9301a0b087528fb3a66d5b73a456322c"></a>
### Function entityData

![][public]
![][const]

```cpp
dp_double* const ansys::dpf::Field::entityData(dp_index entity_index, dp_int &size) const
```



**Returns**:

Pointer to data array of an entity, by index.



**Parameters**:

* [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) **entity_index**: [in] Index of entity for which to get data.
* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) & **size**: [out] Size of returned data array.

**Return type**: [dp\_double](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1acb480013bfed185b5e34a0bdcb0e3790) *const

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
* [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector)< double > & **data**: [out] Pointer to the data.

**Return type**: void

<a id="classansys_1_1dpf_1_1Field_1a73d17442fa66049936eb5363f79896db"></a>
### Function entityDataById

![][public]
![][const]

```cpp
dp_double* const ansys::dpf::Field::entityDataById(dp_id entity_id, dp_int &size) const
```



**Returns**:

Pointer to data array of an entity, by id.



**Parameters**:

* [dp\_id](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ab4574c9af3f2bb8011da7d1f4c8da20e) **entity_id**: [in] Id of entity for which to get data.
* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) & **size**: [out] Size of returned data array.

**Return type**: [dp\_double](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1acb480013bfed185b5e34a0bdcb0e3790) *const

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
* [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector)< double > & **data**: [out] Pointer to the data.

**Return type**: void

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

<a id="classansys_1_1dpf_1_1Field_1a773481e9f7efb04d74c72be914b317d6"></a>
### Function support

![][public]
![][const]

```cpp
Support ansys::dpf::Field::support() const
```



**Returns**:

[Support](classansys_1_1dpf_1_1Support.md#classansys_1_1dpf_1_1Support) of the field.



**Return type**: [Support](classansys_1_1dpf_1_1Support.md#classansys_1_1dpf_1_1Support)

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

<a id="classansys_1_1dpf_1_1Field_1aab82032844ca177841de8c3011dab297"></a>
### Function deep\_copy

![][public]
![][const]

```cpp
Field ansys::dpf::Field::deep_copy(ansys::dpf::Client const *const client) const
```



Make a deep copy on a given client.



**Parameters**:

* [ansys::dpf::Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client**: [in] Remote client

**Return type**: [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field)

<a id="classansys_1_1dpf_1_1Field_1aa838791f5e7d7a272b9fbe441d7e4a4f"></a>
### Function deep\_copy

![][public]
![][const]

```cpp
Field ansys::dpf::Field::deep_copy() const
```



Make a deep copy locally.



**Return type**: [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field)

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



**Return type**: [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field)

**TODO**:

* includes {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)