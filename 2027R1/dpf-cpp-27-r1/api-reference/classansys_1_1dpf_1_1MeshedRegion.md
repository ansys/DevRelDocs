<a id="classansys_1_1dpf_1_1MeshedRegion"></a>
# Class ansys::dpf::MeshedRegion

![][C++]
![][public]

**Definition**: `dpf\_api.h` (line 1103)

Holds the mesh for a given region (body, faces, skin, ...).

The meshed region is an entity describing a mesh. Node and element scopings, element types, connectivity (list of node indices composing each element) and node coordinates are the fundamental entities composing the meshed region. It can also have materials, named selections...

**Inherits from**:

* [ansys::dpf::DpfTypes](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes)

## Members

* [addElement](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a11b6e06dfea398609fa9fb25ad4333bb)
* [addElement](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a8bda0d11514aaf91d367d88b700f05c7)
* [addNode](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a2b4891674d74a792b63318c305963500)
* [addNode](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a3d2d3cb295d55dd3ab8d9630e03e09dc)
* [availableNamedSelections](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a3b768ab61193b7b1a6359f4ac619d1c4)
* [availablePropertyFields](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1ad4dd7e2fb551172b494c559e403d902a)
* [callAPI](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1aea34d37e0c080126eff70db34bf46597)
* [connectivity](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a2c75723ffc634c39b081eecd31d54309)
* [deep\_copy](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a1506cd74943091c868e037cd9eafde94)
* [describe](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a9977945710983bc03d2940fa007847b2)
* [elementDescriptorByElementId](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a5809c805cc972f4958fab4375be4f8cb)
* [elementScoping](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a3056a0fc6d69ca8769e33de6be0cecf0)
* [elementShape](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a04833f8ff06d70a58259eddf7e7b350c)
* [elementTypes](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a0e89e4e209380a10140c14cd91655907)
* [empty](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a39cd546c42518e2332be8f287db95459)
* [emptyMeshedRegion](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a597c0914caa5c5f069c74d981bb36d89)
* [faceScoping](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a4b0b3c40b12475dfafc3fa9c5bc5ac9c)
* [fillCursor](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a012ff219aea7e92a889a77611de00b3a)
* [getClient](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a968afd9daa0b0f13b65a2ac61369d73a)
* [hasBeam](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a4c0e5dd26ae85f7f9817848b6cf0e050)
* [hasBeenMovedLocally](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a1a5634202c15404b6b24e8f50e51cb66)
* [hasInternalObject](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1ae198f89868d85c7db6dc1a934a1d3c15)
* [hasOnlyBeam](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a4d5721fffae74a36f5df08f17b3e8814)
* [hasOnlyPoint](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1ad4bd4ba5896708b8c071dd45f342f1e0)
* [hasOnlyShell](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a07f2c499670bb730703defe33d7a2366)
* [hasOnlySkin](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a329260f43c0178f2789082717916799c)
* [hasOnlySolid](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1ad731342d5494aba788fdf45406bae322)
* [hasPoint](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1aeea1bdb261048a2f951c4e14e557fcfc)
* [hasPolygons](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a13ff7e2b797ca3b50732e0d1859f03d8)
* [hasPolyhedrons](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a511d93666c76398d3553fbf697172c8c)
* [hasPropField](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a1c6b2126a94dc0b94f01c2ae179ad44a)
* [hasShell](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a606ffd0951d9f75cc632754a8619153c)
* [hasSkin](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a0410fcda938500f26b02dd149816e693)
* [hasSolid](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a24ef139add0dbf2afee4fe4fc39da778)
* [isOnCommonAPI](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a9f9789ff61cc9d400a2a344830706b73)
* [isSameObject](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1aa64d5f8fcd7d85ad6ebf708494dbefd7)
* [lengthUnit](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1aed167b03463f42d94d424797529eccad)
* [MeshedRegion](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1ac4226b61e3a79c888f5945b1139ea355)
* [MeshedRegion](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1ade6fe7a4445f4e135e58c531dc97e759)
* [MeshedRegion](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1aba448efff0199ee26bed06ba92c6f5bb)
* [MeshedRegion](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a856308261c05f739c04f38c1b35ca072)
* [MeshedRegion](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a5707eb2666551a4af4f27403dc1b69da)
* [MeshedRegion](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a505ce797a4462fa1b7dfae2e8156476e)
* [name](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1acf7de56fc6905e8da6679ea9d8df2a5e)
* [namedSelection](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a1f12d06a08e8afe8fe59c0a8d6aee779)
* [nodesCoordinates](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a482ae171f257bfe86c8e567f0882caa4)
* [nodeScoping](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1ad5df08993b7c588d9565ef1c1ea4813d)
* [numberOfElements](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1ac3a262bc236fda82374a462d7c9e240c)
* [numberOfFaces](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a8af38259739409435e0de446f7ff6499)
* [numberOfNodes](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1af8ad6b50708b2c201a457c5da8e819da)
* [numNodesOfElement](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a9581baba0973ffff79236c95a131f62a)
* [operator=](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a69670c1f8a5ff252d4377429928f7f9e)
* [operator=](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1aac882f2631e077aa86fdb6b7aa802ea0)
* [prepareConstruction](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1aa7b984923ddd90379f08bc5b9831a95e)
* [propField](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a198535c4c5a86ce1920cf2f5cd6c2d9d)
* [setConnectivity](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a4f7720c8b112b1d02eedcc4564986232)
* [setElementTypes](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a6521976e1c6a8ed3a1357c979cd380aa)
* [setLengthUnit](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a638d38d0400a6c64b85082a4c4beb105)
* [setName](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a76b415d07d6609006546fe28dac4d45b)
* [setNamedSelectionScoping](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1afdcea89a088a5a05244abfa8a2457040)
* [setNodesCoordinates](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1ad5fbd4c5a82f47d45eba62536cba68a1)
* [setPropertyField](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a2bc27437f9025696a0d07072bd4bafe1)
* [~DpfTypes](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1ab7c83b6ea160c2b115e056f6c312112f)
* [~MeshedRegion](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion_1a88e60f0acd3fc6656f507603a11ef950)

## Friends

<a id="classansys_1_1dpf_1_1MeshedRegion_1a33ff3f826991522d2e77c1c523f33e19"></a>
### Friend Operator

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 1105)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Operator"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::Operator"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"Operator"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1afa07847c7cb432b260e61a0c18025ba3"></a>
### Friend Workflow

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 1106)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Workflow"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::Workflow"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"Workflow"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1af891ea2ca8eebe3679e051763ba989ce"></a>
### Friend CollectionBase

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 1107)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class CollectionBase"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::CollectionBase"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"CollectionBase"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a4303ef65e3d088cbff0512dfbf3734ac"></a>
### Friend Support

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 1108)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Support"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::Support"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"Support"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1aaec47a26a3c11c1debd3ed922b69cbd2"></a>
### Friend Field

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 1109)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Field"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::Field"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"Field"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1abb4aa5a7ed62b741f0b146a257d0fe5e"></a>
### Friend PropertyField

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 1110)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class PropertyField"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::PropertyField"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"PropertyField"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1ad19b1aa2f28448bd897fc6c5dd771f02"></a>
### Friend CustomTypeField

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 1111)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class CustomTypeField"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::CustomTypeField"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"CustomTypeField"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a81d95df60edf516a1de9878b780f8fb3"></a>
### Friend OperatorMain

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 1112)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class OperatorMain"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::OperatorMain"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"OperatorMain"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a9820c685b67a3355c042bb0b3365d9e2"></a>
### Friend Any

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 1113)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Any"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::Any"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"Any"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1acc06c4380c923e11af63f95e97c3c259"></a>
### Friend GenericDataContainer

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 1114)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class GenericDataContainer"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::GenericDataContainer"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"GenericDataContainer"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1af764561c544bacc1b90b526ee8d3c708"></a>
### Friend core

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 1115)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class core"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::core"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"core"}]},{"type":"text","text":"\n        "}]}`
-->

## Private functions

<a id="classansys_1_1dpf_1_1MeshedRegion_1ac4226b61e3a79c888f5945b1139ea355"></a>
### Function MeshedRegion

![][private]


```cpp
ansys::dpf::MeshedRegion::MeshedRegion(opaque::DpfInternalSharedObject *)
```








**Parameters**:

* opaque::DpfInternalSharedObject *

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::MeshedRegion"}]}`
-->

## Public functions

<a id="classansys_1_1dpf_1_1MeshedRegion_1ade6fe7a4445f4e135e58c531dc97e759"></a>
### Function MeshedRegion

![][public]


```cpp
ansys::dpf::MeshedRegion::MeshedRegion()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::MeshedRegion"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1aba448efff0199ee26bed06ba92c6f5bb"></a>
### Function MeshedRegion

![][public]


```cpp
ansys::dpf::MeshedRegion::MeshedRegion(Client const *const client)
```




Create a new meshed region on a server.



**Parameters**:

* [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client**: [in] [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) instance designating the IP, port and protocol to use.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::MeshedRegion"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a856308261c05f739c04f38c1b35ca072"></a>
### Function MeshedRegion

![][public]


```cpp
ansys::dpf::MeshedRegion::MeshedRegion(int id, Client const *const client)
```




Retrieve an existing instance of [MeshedRegion](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion) on a server.



**Parameters**:

* int **id**: [in] Id of the [MeshedRegion](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion) object on the server's database.
* [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client**: [in] [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) instance designating the IP, port and protocol to use.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::MeshedRegion"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a88e60f0acd3fc6656f507603a11ef950"></a>
### Function ~MeshedRegion

![][public]


```cpp
virtual ansys::dpf::MeshedRegion::~MeshedRegion()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::~MeshedRegion"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a5707eb2666551a4af4f27403dc1b69da"></a>
### Function MeshedRegion

![][public]


```cpp
ansys::dpf::MeshedRegion::MeshedRegion(MeshedRegion const &)
```








**Parameters**:

* MeshedRegion const &

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::MeshedRegion"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a505ce797a4462fa1b7dfae2e8156476e"></a>
### Function MeshedRegion

![][public]


```cpp
ansys::dpf::MeshedRegion::MeshedRegion(MeshedRegion &&) noexcept
```








**Parameters**:

* MeshedRegion &&

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::MeshedRegion"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a69670c1f8a5ff252d4377429928f7f9e"></a>
### Function operator=

![][public]


```cpp
MeshedRegion & ansys::dpf::MeshedRegion::operator=(MeshedRegion const &)
```








**Parameters**:

* MeshedRegion const &

**Return type**: MeshedRegion &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::operator="}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1aac882f2631e077aa86fdb6b7aa802ea0"></a>
### Function operator=

![][public]


```cpp
MeshedRegion & ansys::dpf::MeshedRegion::operator=(MeshedRegion &&) noexcept
```








**Parameters**:

* MeshedRegion &&

**Return type**: MeshedRegion &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::operator="}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1af8ad6b50708b2c201a457c5da8e819da"></a>
### Function numberOfNodes

![][public]
![][const]


```cpp
dp_int ansys::dpf::MeshedRegion::numberOfNodes() const
```




**Returns**:

Number of nodes in mesh.



**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::numberOfNodes"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1ac3a262bc236fda82374a462d7c9e240c"></a>
### Function numberOfElements

![][public]
![][const]


```cpp
dp_int ansys::dpf::MeshedRegion::numberOfElements() const
```




**Returns**:

Number of elements in mesh.



**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::numberOfElements"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a8af38259739409435e0de446f7ff6499"></a>
### Function numberOfFaces

![][public]
![][const]


```cpp
dp_int ansys::dpf::MeshedRegion::numberOfFaces() const
```




**Returns**:

Number of faces in mesh.



**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::numberOfFaces"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1aed167b03463f42d94d424797529eccad"></a>
### Function lengthUnit

![][public]
![][const]


```cpp
Unit ansys::dpf::MeshedRegion::lengthUnit() const
```




**Returns**:

Length unit for mesh.



**Return type**: [Unit](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::lengthUnit"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a482ae171f257bfe86c8e567f0882caa4"></a>
### Function nodesCoordinates

![][public]
![][const]


```cpp
Field ansys::dpf::MeshedRegion::nodesCoordinates() const
```




**Returns**:

[Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) containing mesh node coordinates.



**Return type**: Field

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::nodesCoordinates"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a198535c4c5a86ce1920cf2f5cd6c2d9d"></a>
### Function propField

![][public]
![][const]


```cpp
PropertyField ansys::dpf::MeshedRegion::propField(PropertyType const &prop) const
```




**Returns**:

Property field given by property type.



**Parameters**:

* [PropertyType](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType) const & **prop**: [in] Property type of which to get property field.

**Return type**: PropertyField

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::propField"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a1c6b2126a94dc0b94f01c2ae179ad44a"></a>
### Function hasPropField

![][public]
![][const]


```cpp
bool ansys::dpf::MeshedRegion::hasPropField(PropertyType const &prop) const
```




**Returns**:

Indication that property type exists.



**Parameters**:

* [PropertyType](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType) const & **prop**: [in] Property type of which to check existence.

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::hasPropField"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1ad4dd7e2fb551172b494c559e403d902a"></a>
### Function availablePropertyFields

![][public]
![][const]


```cpp
std::vector< std::string > ansys::dpf::MeshedRegion::availablePropertyFields() const
```




**Returns**:

Vector of property fields withing mesh. See [property\_types](structansys_1_1dpf_1_1property__types.md#structansys_1_1dpf_1_1property__types) for examples of available types.



**Return type**: std::vector< std::string >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::availablePropertyFields"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a0e89e4e209380a10140c14cd91655907"></a>
### Function elementTypes

![][public]
![][const]


```cpp
PropertyField ansys::dpf::MeshedRegion::elementTypes() const
```




**Returns**:

Property field describing element types within mesh.



**Return type**: PropertyField

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::elementTypes"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a2c75723ffc634c39b081eecd31d54309"></a>
### Function connectivity

![][public]
![][const]


```cpp
PropertyField ansys::dpf::MeshedRegion::connectivity() const
```




**Returns**:

Property field describing element connectivity for mesh.



**Return type**: PropertyField

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::connectivity"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1ad5df08993b7c588d9565ef1c1ea4813d"></a>
### Function nodeScoping

![][public]
![][const]


```cpp
Scoping ansys::dpf::MeshedRegion::nodeScoping() const
```




**Returns**:

[Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping) describing nodes of mesh.



**Return type**: [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::nodeScoping"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a3056a0fc6d69ca8769e33de6be0cecf0"></a>
### Function elementScoping

![][public]
![][const]


```cpp
Scoping ansys::dpf::MeshedRegion::elementScoping() const
```




**Returns**:

[Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping) describing elements of mesh.



**Return type**: [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::elementScoping"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a4b0b3c40b12475dfafc3fa9c5bc5ac9c"></a>
### Function faceScoping

![][public]
![][const]


```cpp
Scoping ansys::dpf::MeshedRegion::faceScoping() const
```




**Returns**:

[Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping) describing faces of mesh.



**Return type**: [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::faceScoping"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a3b768ab61193b7b1a6359f4ac619d1c4"></a>
### Function availableNamedSelections

![][public]
![][const]


```cpp
std::vector< std::string > ansys::dpf::MeshedRegion::availableNamedSelections() const
```




**Returns**:

Vector of named selections withing mesh.



**Return type**: std::vector< std::string >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::availableNamedSelections"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a1f12d06a08e8afe8fe59c0a8d6aee779"></a>
### Function namedSelection

![][public]
![][const]


```cpp
Scoping ansys::dpf::MeshedRegion::namedSelection(std::string const &name) const
```




**Returns**:

[Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping) for given named selection.



**Parameters**:

* std::string const & **name**: [in] Name of which to get scoping.

**Return type**: [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::namedSelection"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a012ff219aea7e92a889a77611de00b3a"></a>
### Function fillCursor

![][public]
![][const]


```cpp
void ansys::dpf::MeshedRegion::fillCursor(dp_index element_index, ElementCursor &cursor) const
```




Get a cursor for given element.



**Parameters**:

* [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) **element_index**: [in] Index of element within mesh for which to get cursor.
* [ElementCursor](classansys_1_1dpf_1_1ElementCursor.md#classansys_1_1dpf_1_1ElementCursor) & **cursor**: [out] Cursor for given element.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::fillCursor"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1aa7b984923ddd90379f08bc5b9831a95e"></a>
### Function prepareConstruction

![][public]


```cpp
void ansys::dpf::MeshedRegion::prepareConstruction(dp_int n_nodes, dp_int n_elements)
```




Allocate and reserve space for given number of nodes and elements. node scoping and coordinates vectors are reserved for n_nodes, elements scoping, connectivity and elements type property field are reserved for n_elements. this method should always be called before adding any node or element.



**Parameters**:

* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **n_nodes**: [in] Expected number of nodes within mesh.
* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **n_elements**: [in] Expected number of elements within mesh.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::prepareConstruction"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a2b4891674d74a792b63318c305963500"></a>
### Function addNode

![][public]


```cpp
void ansys::dpf::MeshedRegion::addNode(dp_id node_id, std::array< dp_double, 3 > const &data)
```




Add node to mesh.



**Parameters**:

* [dp\_id](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ab4574c9af3f2bb8011da7d1f4c8da20e) **node_id**: [in] Id of node.
* std::array< [dp\_double](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1acb480013bfed185b5e34a0bdcb0e3790), 3 > const & **data**: [in] XYZ coordinates of node.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::addNode"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a3d2d3cb295d55dd3ab8d9630e03e09dc"></a>
### Function addNode

![][public]


```cpp
void ansys::dpf::MeshedRegion::addNode(dp_id node_id, dp_double *const data)
```




Add node to mesh.



**Parameters**:

* [dp\_id](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ab4574c9af3f2bb8011da7d1f4c8da20e) **node_id**: [in] Id of node.
* [dp\_double](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1acb480013bfed185b5e34a0bdcb0e3790) *const **data**: [in] XYZ coordinates of node.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::addNode"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a11b6e06dfea398609fa9fb25ad4333bb"></a>
### Function addElement

![][public]


```cpp
void ansys::dpf::MeshedRegion::addElement(ElementDescriptor const &descriptor, dp_id elem_id, std::vector< dp_index > const &node_indices)
```




Add element to mesh. Not available in remote, use the implementation with the element shape instead.



**Parameters**:

* [ElementDescriptor](structansys_1_1dpf_1_1ElementDescriptor.md#structansys_1_1dpf_1_1ElementDescriptor) const & **descriptor**: [in] Description of element.
* [dp\_id](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ab4574c9af3f2bb8011da7d1f4c8da20e) **elem_id**: [in] Id of element.
* std::vector< [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) > const & **node_indices**: [in] Vector of node ids of element.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::addElement"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a8bda0d11514aaf91d367d88b700f05c7"></a>
### Function addElement

![][public]


```cpp
void ansys::dpf::MeshedRegion::addElement(ansys::dpf::elements::EShape shape, dp_id elem_id, std::vector< dp_index > const &node_indices)
```




Add element to mesh.



**Parameters**:

* ansys::dpf::elements::EShape **shape**: [in] Shape of the element.
* [dp\_id](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ab4574c9af3f2bb8011da7d1f4c8da20e) **elem_id**: [in] Id of element.
* std::vector< [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) > const & **node_indices**: [in] Vector of node ids of element.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::addElement"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a638d38d0400a6c64b85082a4c4beb105"></a>
### Function setLengthUnit

![][public]


```cpp
void ansys::dpf::MeshedRegion::setLengthUnit(Unit const &unit)
```




Set length unit for mesh.



**Parameters**:

* [Unit](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit) const & **unit**: [in] Length unit for mesh.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::setLengthUnit"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1afdcea89a088a5a05244abfa8a2457040"></a>
### Function setNamedSelectionScoping

![][public]


```cpp
void ansys::dpf::MeshedRegion::setNamedSelectionScoping(std::string const &name, Scoping scoping)
```




Set a named selection scoping for mesh.



**Parameters**:

* std::string const & **name**: [in] Named selection name.
* [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping) **scoping**: [in] [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping) to set.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::setNamedSelectionScoping"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a2bc27437f9025696a0d07072bd4bafe1"></a>
### Function setPropertyField

![][public]


```cpp
void ansys::dpf::MeshedRegion::setPropertyField(std::string const &name, PropertyField property_field)
```




Set an elemental property field for mesh. Its elemental scoping must be equal to the one that has already been set into the mesh, if it exists.



**Parameters**:

* std::string const & **name**: [in] Property name: 

**See also**: common_property_names.
* PropertyField **property_field**: [in] Property field to set.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::setPropertyField"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a4f7720c8b112b1d02eedcc4564986232"></a>
### Function setConnectivity

![][public]


```cpp
void ansys::dpf::MeshedRegion::setConnectivity(PropertyField connectivity)
```




Set a connectivity (nodes of the elements) property field.



**Parameters**:

* PropertyField **connectivity**: [in] Connectivity to set.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::setConnectivity"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a6521976e1c6a8ed3a1357c979cd380aa"></a>
### Function setElementTypes

![][public]


```cpp
void ansys::dpf::MeshedRegion::setElementTypes(PropertyField element_types)
```




Set element types property field.



**Parameters**:

* PropertyField **element_types**: [in] Element types data to set..

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::setElementTypes"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1ad5fbd4c5a82f47d45eba62536cba68a1"></a>
### Function setNodesCoordinates

![][public]


```cpp
void ansys::dpf::MeshedRegion::setNodesCoordinates(Field coordinates)
```




Set a field for mesh.



**Parameters**:

* Field **coordinates**: [in] [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) to set.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::setNodesCoordinates"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a4c0e5dd26ae85f7f9817848b6cf0e050"></a>
### Function hasBeam

![][public]
![][const]


```cpp
bool ansys::dpf::MeshedRegion::hasBeam() const
```




**Returns**:

Indication if mesh contains beam elements.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::hasBeam"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a4d5721fffae74a36f5df08f17b3e8814"></a>
### Function hasOnlyBeam

![][public]
![][const]


```cpp
bool ansys::dpf::MeshedRegion::hasOnlyBeam() const
```




**Returns**:

Indication if mesh only contains beam elements.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::hasOnlyBeam"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a606ffd0951d9f75cc632754a8619153c"></a>
### Function hasShell

![][public]
![][const]


```cpp
bool ansys::dpf::MeshedRegion::hasShell() const
```




**Returns**:

Indication if mesh contains shell elements.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::hasShell"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a07f2c499670bb730703defe33d7a2366"></a>
### Function hasOnlyShell

![][public]
![][const]


```cpp
bool ansys::dpf::MeshedRegion::hasOnlyShell() const
```




**Returns**:

Indication if mesh only contains shell elements.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::hasOnlyShell"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1aeea1bdb261048a2f951c4e14e557fcfc"></a>
### Function hasPoint

![][public]
![][const]


```cpp
bool ansys::dpf::MeshedRegion::hasPoint() const
```




**Returns**:

Indication if mesh contains point elements.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::hasPoint"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1ad4bd4ba5896708b8c071dd45f342f1e0"></a>
### Function hasOnlyPoint

![][public]
![][const]


```cpp
bool ansys::dpf::MeshedRegion::hasOnlyPoint() const
```




**Returns**:

Indication if mesh only contains point elements.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::hasOnlyPoint"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a24ef139add0dbf2afee4fe4fc39da778"></a>
### Function hasSolid

![][public]
![][const]


```cpp
bool ansys::dpf::MeshedRegion::hasSolid() const
```




**Returns**:

Indication if mesh contains solid elements.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::hasSolid"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1ad731342d5494aba788fdf45406bae322"></a>
### Function hasOnlySolid

![][public]
![][const]


```cpp
bool ansys::dpf::MeshedRegion::hasOnlySolid() const
```




**Returns**:

Indication if mesh only contains solid elements.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::hasOnlySolid"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a0410fcda938500f26b02dd149816e693"></a>
### Function hasSkin

![][public]
![][const]


```cpp
bool ansys::dpf::MeshedRegion::hasSkin() const
```




**Returns**:

Indication if mesh contains skin elements.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::hasSkin"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a329260f43c0178f2789082717916799c"></a>
### Function hasOnlySkin

![][public]
![][const]


```cpp
bool ansys::dpf::MeshedRegion::hasOnlySkin() const
```




**Returns**:

Indication if mesh only contains skin elements.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::hasOnlySkin"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a13ff7e2b797ca3b50732e0d1859f03d8"></a>
### Function hasPolygons

![][public]
![][const]


```cpp
bool ansys::dpf::MeshedRegion::hasPolygons() const
```




**Returns**:

Indication if mesh contains Polygonal elements.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::hasPolygons"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a511d93666c76398d3553fbf697172c8c"></a>
### Function hasPolyhedrons

![][public]
![][const]


```cpp
bool ansys::dpf::MeshedRegion::hasPolyhedrons() const
```




**Returns**:

Indication if mesh contains Polyhedral elements.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::hasPolyhedrons"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a5809c805cc972f4958fab4375be4f8cb"></a>
### Function elementDescriptorByElementId

![][public]
![][const]


```cpp
ansys::dpf::ElementDescriptor ansys::dpf::MeshedRegion::elementDescriptorByElementId(dp_id element_id) const
```




Get [ElementDescriptor](structansys_1_1dpf_1_1ElementDescriptor.md#structansys_1_1dpf_1_1ElementDescriptor) (type related information) from element id. .



**Parameters**:

* [dp\_id](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ab4574c9af3f2bb8011da7d1f4c8da20e) **element_id**

**Return type**: [ansys::dpf::ElementDescriptor](structansys_1_1dpf_1_1ElementDescriptor.md#structansys_1_1dpf_1_1ElementDescriptor)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::elementDescriptorByElementId"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a04833f8ff06d70a58259eddf7e7b350c"></a>
### Function elementShape

![][public]
![][const]


```cpp
ansys::dpf::elements::EShape ansys::dpf::MeshedRegion::elementShape(dp_id element_id) const
```




Get element shape.



**Parameters**:

* [dp\_id](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ab4574c9af3f2bb8011da7d1f4c8da20e) **element_id**

**Return type**: ansys::dpf::elements::EShape

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::elementShape"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a9581baba0973ffff79236c95a131f62a"></a>
### Function numNodesOfElement

![][public]
![][const]


```cpp
int ansys::dpf::MeshedRegion::numNodesOfElement(dp_index element_index) const
```




Get number of nodes for element at given index.



**Parameters**:

* [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) **element_index**

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::numNodesOfElement"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1acf7de56fc6905e8da6679ea9d8df2a5e"></a>
### Function name

![][public]
![][const]


```cpp
std::string ansys::dpf::MeshedRegion::name() const
```




**Returns**:

Name of the mesh.



**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::name"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a76b415d07d6609006546fe28dac4d45b"></a>
### Function setName

![][public]


```cpp
void ansys::dpf::MeshedRegion::setName(std::string const &rhs)
```




Set mesh name.



**Parameters**:

* std::string const & **rhs**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::setName"}]}`
-->

<a id="classansys_1_1dpf_1_1MeshedRegion_1a1506cd74943091c868e037cd9eafde94"></a>
### Function deep\_copy

![][public]
![][const]


```cpp
MeshedRegion ansys::dpf::MeshedRegion::deep_copy(ansys::dpf::Client const *const client=nullptr) const
```




Create a new [MeshedRegion](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion) on a server by copying all the data of this [MeshedRegion](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion).



**Parameters**:

* [ansys::dpf::Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client** = nullptr : [in] [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) instance designating the IP, port and protocol to use.

**Return type**: MeshedRegion

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::deep_copy"}]}`
-->

## Public static functions

<a id="classansys_1_1dpf_1_1MeshedRegion_1a597c0914caa5c5f069c74d981bb36d89"></a>
### Function emptyMeshedRegion

![][public]
![][static]


```cpp
static MeshedRegion ansys::dpf::MeshedRegion::emptyMeshedRegion()
```








**Return type**: MeshedRegion

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshedRegion::emptyMeshedRegion"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)