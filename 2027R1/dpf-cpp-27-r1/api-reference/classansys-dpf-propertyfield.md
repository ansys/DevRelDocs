<a id="classansys_1_1dpf_1_1PropertyField"></a>
# Class ansys::dpf::PropertyField

![][C++]
![][public]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 2380)



Holds Integral (int32) data describing a Property located on given entities (the Property [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field)'s data is bounded with its scoping). Is the equivalent of the [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) but with integral values data (and not double values).

**Inherits from**:

* [ansys::dpf::DpfTypes](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes)

## Members

* [callAPI](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1aea34d37e0c080126eff70db34bf46597)
* [cloneToCustomTypeField](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1a695daa98db9128948db4c67ffc57eedd)
* [cloneToField](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1ace579cbad593a985d56dfae75f3a50ba)
* [cloneToPropertyField](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1a940bc0ea91ca4e1725abb112eee4c0e4)
* [copy\_to\_Tfield](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1af0f42f6ef312437a7ee49d79b357a39f)
* [createPropertyFieldWithTransformation](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1a0ca259df13f04a150585337c7914c37e)
* [data](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1ac77c2c8994da1d1511c69849257c748c)
* [dataById](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1aa32b0e1c2611e88a2aef55c94a8c6880)
* [dataByIndex](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1a8b09b1109c854475c4af16cba105a667)
* [dataPointer](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1a7b2afaba19a4b177460572a231c5275b)
* [dataSize](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1af0ff358222e067e0c03d588a6b11b04c)
* [deep\_copy](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1ab1245b64a580a13f74be20bc993eb403)
* [describe](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a9977945710983bc03d2940fa007847b2)
* [empty](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a39cd546c42518e2332be8f287db95459)
* [emptyPropertyField](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1aac8837afab55e9ebe3087e966ebc9edd)
* [entityData](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1a78f843b67d4df51c5bd0c57f98d9cc17)
* [entityDataById](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1a433fe762b8bbf44c5cb7bc09e8e4f7a7)
* [fieldDefinition](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1a4df2020806c5f8d2ace1faa6b26a1ecb)
* [fillCursor](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1a90f3baa944b4dd1a49adbcbec5a3d766)
* [getClient](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a968afd9daa0b0f13b65a2ac61369d73a)
* [getData](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1ab4fd6ed2f236efb404d4454944b4474b)
* [getHeaderAsDataTree](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1aa9dc8cbf0e0bb1fd4efb704737ad2065)
* [getIds](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1a55c6d4eb97b98ca58672b149e2bf1483)
* [hasBeenMovedLocally](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a1a5634202c15404b6b24e8f50e51cb66)
* [hasInternalObject](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1ae198f89868d85c7db6dc1a934a1d3c15)
* [isOnCommonAPI](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a9f9789ff61cc9d400a2a344830706b73)
* [isSameObject](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1aa64d5f8fcd7d85ad6ebf708494dbefd7)
* [location](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1a9dbf80f14848a93eb311d97a4b3da8dd)
* [name](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1aaf5a2e4abe9da5e77cc7b954b0ef81ba)
* [numberOfComponents](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1a1a2b01c58216827f720b4a76a8f52d9d)
* [numberOfElementaryData](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1a3cb32ee79adc23f5c7ab5f6b6d831e26)
* [operator=](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1adec6a0cbb0a46d7831e223fad50aab62)
* [operator=](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1a790b5c4569b3f2b6c58c0e9292147d12)
* [PropertyField](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1a1856a7b2187e8fffd97d9d04b5da798a)
* [PropertyField](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1a9d57c71f4fad64a1f5946ebbd39db3c7)
* [PropertyField](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1a41f086b401649bbbaa1e1242b0d9ac03)
* [PropertyField](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1ac8723c38fad6636b55b31a3d6d8ccc76)
* [PropertyField](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1a88b5dfeb3f030e6afbfbf87efbcc3561)
* [PropertyField](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1ad787ee870fa5d12ba322bd1d3bbb52cd)
* [PropertyField](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1a89260e610bdbe97eaf9a0f6364daf0de)
* [push\_back](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1a74bc6460d3924f837b480b725f2d230c)
* [push\_back](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1ac709022d579f02b554fdc06fe0a59f7f)
* [push\_back](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1a2200849fcd3d0c6ebc171b15d9cb8e54)
* [reserve](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1ad7e142a83fd4138694a80f1a36bb778a)
* [resize](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1aafa75bc6e0e191b4914282ad620a5c35)
* [scoping](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1a9d57c8ecf193532958d34de87db60da0)
* [setData](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1ae40e20aaa78a8bfc6ff8176cb9381152)
* [setData](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1a74e8c4842a23651d988f8a264c9eabe6)
* [setDataPointer](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1afb3f6cd0c63ea162c4a7a53ef8066e7f)
* [setDataPointer](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1a4e7b773455c0cf6aefdfaa5e25261940)
* [setFieldDefinition](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1a4ed774aecf5c68516a17da55da7b0ff7)
* [setHeaderAsDataTree](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1a9c5f2a9ad893a89b067fc93c72170d56)
* [setName](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1aefb5d03109bcc57f95ca1257ab92ed7b)
* [setScoping](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1a6e63d1d672b5b1d074052e9e9f0ad239)
* [setSupport](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1a8124e1eaed971c006045b89b5fb28798)
* [setSupport](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1ae715fc13eaca1ce40e0fcd686d3c8555)
* [setSupport](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1a8244b39576d028e8168557c0764d49a6)
* [support](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1ac99d91c191df704b90601b43076c216a)
* [~DpfTypes](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1ab7c83b6ea160c2b115e056f6c312112f)
* [~PropertyField](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField_1ae4d4f5e5f1452e4fba0fcf5897649d17)

## Friends

<a id="classansys_1_1dpf_1_1PropertyField_1a33ff3f826991522d2e77c1c523f33e19"></a>
### Friend Operator

![][C++]
![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 2382)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Operator"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::Operator"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"Operator"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1afa07847c7cb432b260e61a0c18025ba3"></a>
### Friend Workflow

![][C++]
![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 2383)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Workflow"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::Workflow"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"Workflow"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1abb31806c269987c4a5e2a51f1f4d4d39"></a>
### Friend MeshedRegion

![][C++]
![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 2384)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class MeshedRegion"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::MeshedRegion"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"MeshedRegion"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1a87ba90b4bbcd8d8baa7bf17c27fbdfae"></a>
### Friend TimeFreqSupport

![][C++]
![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 2385)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class TimeFreqSupport"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::TimeFreqSupport"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"TimeFreqSupport"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1a81d95df60edf516a1de9878b780f8fb3"></a>
### Friend OperatorMain

![][C++]
![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 2386)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class OperatorMain"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::OperatorMain"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"OperatorMain"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1a9820c685b67a3355c042bb0b3365d9e2"></a>
### Friend Any

![][C++]
![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 2387)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Any"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::Any"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"Any"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1a4303ef65e3d088cbff0512dfbf3734ac"></a>
### Friend Support

![][C++]
![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 2388)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Support"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::Support"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"Support"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1a8a8b42bcbba089cc2a997c65416c9038"></a>
### Friend GenericSupport

![][C++]
![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 2389)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class GenericSupport"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::GenericSupport"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"GenericSupport"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1ad465d7b2f213af5e9c522d51658e74b9"></a>
### Friend CyclicSupport

![][C++]
![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 2390)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class CyclicSupport"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::CyclicSupport"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"CyclicSupport"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1acc06c4380c923e11af63f95e97c3c259"></a>
### Friend GenericDataContainer

![][C++]
![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 2391)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class GenericDataContainer"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::GenericDataContainer"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"GenericDataContainer"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1af764561c544bacc1b90b526ee8d3c708"></a>
### Friend core

![][C++]
![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 2392)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class core"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::core"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"core"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1a6c5ceed26c19a00434b5fa91cbed580c"></a>
### Friend DataTree

![][C++]
![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 2393)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class DataTree"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::DataTree"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"DataTree"}]},{"type":"text","text":"\n        "}]}`
-->

## Private functions

<a id="classansys_1_1dpf_1_1PropertyField_1a1856a7b2187e8fffd97d9d04b5da798a"></a>
### Function PropertyField

![][private]


```cpp
ansys::dpf::PropertyField::PropertyField(opaque::DpfInternalSharedObject *)
```








**Parameters**:

* opaque::DpfInternalSharedObject *

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::PropertyField"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1a9d57c71f4fad64a1f5946ebbd39db3c7"></a>
### Function PropertyField

![][private]


```cpp
ansys::dpf::PropertyField::PropertyField(opaque::DpfObject *, so::API const *api)
```








**Parameters**:

* opaque::DpfObject *
* so::API const * **api**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::PropertyField"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1af0f42f6ef312437a7ee49d79b357a39f"></a>
### Function copy\_to\_Tfield

![][private]
![][const]


```cpp
void ansys::dpf::PropertyField::copy_to_Tfield(TField &out, ansys::dpf::Client const *const client, bool const copy_ids=true, bool const copy_data_ptr=true, bool const copy_support=true) const
```








**Parameters**:

* TField & **out**: [in] [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) where to copy the data
* [ansys::dpf::Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client**: [in] Remote client
* bool const **copy_ids** = true : [in] Boolean to decide if scoping ids are to be copied
* bool const **copy_data_ptr** = true : [in] Boolean to decide if data pointer is to be copied
* bool const **copy_support** = true : [in] Boolean to decide if the support reference is to be copied

**Return type**: void

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"typename TField"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::copy_to_Tfield"}]}`
-->

## Public static functions

<a id="classansys_1_1dpf_1_1PropertyField_1aac8837afab55e9ebe3087e966ebc9edd"></a>
### Function emptyPropertyField

![][public]
![][static]


```cpp
static PropertyField ansys::dpf::PropertyField::emptyPropertyField()
```








**Return type**: PropertyField

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::emptyPropertyField"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1a0ca259df13f04a150585337c7914c37e"></a>
### Function createPropertyFieldWithTransformation

![][public]
![][static]


```cpp
static PropertyField ansys::dpf::PropertyField::createPropertyFieldWithTransformation(Workflow transformation_wf, int reserved_number_of_entity=0, int reserved_data_size=0, std::string const &input_name_to_connect="input_field", std::string const &output_name_to_eval="transformed_field")
```




Instantiate a [PropertyField](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField) with Transformation. For each call to a getter, the workflow in input is connected this [PropertyField](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField) to input_name_to_connect and the [PropertyField](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField) output in output_name_to_eval is used as the getter instance.



**Parameters**:

* Workflow **transformation_wf**: [in] Transformation workflow.
* int **reserved_number_of_entity** = 0 
* int **reserved_data_size** = 0 
* std::string const & **input_name_to_connect** = "input_field" : [in] Name of the input of the workflow to connect. Should take a [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field).
* std::string const & **output_name_to_eval** = "transformed_field" : [in] Name of the output of the workflow to evaluate. Should return a [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field).

**Return type**: PropertyField

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::createPropertyFieldWithTransformation"}]}`
-->

## Public functions

<a id="classansys_1_1dpf_1_1PropertyField_1ae4d4f5e5f1452e4fba0fcf5897649d17"></a>
### Function ~PropertyField

![][public]


```cpp
virtual ansys::dpf::PropertyField::~PropertyField()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::~PropertyField"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1a41f086b401649bbbaa1e1242b0d9ac03"></a>
### Function PropertyField

![][public]


```cpp
ansys::dpf::PropertyField::PropertyField(Client const *const client, dp_int number_of_entities=0, dp_int data_size=0, const Location &loc=Location())
```




Create an empty property field with a client.



**Parameters**:

* [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client**: [in] [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) to create the property field on.
* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **number_of_entities** = 0 : [in] Number of entities.
* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **data_size** = 0 : [in] Reserved size of data.
* const [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location) & **loc** = [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location)() : [in] [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location) of entities.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::PropertyField"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1ac8723c38fad6636b55b31a3d6d8ccc76"></a>
### Function PropertyField

![][public]


```cpp
ansys::dpf::PropertyField::PropertyField(dp_int number_of_entities=0, dp_int data_size=0)
```




Create a property with number of entities and data size.



**Parameters**:

* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **number_of_entities** = 0 : [in] Number of entities.
* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **data_size** = 0 : [in] Reserved size of data.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::PropertyField"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1a88b5dfeb3f030e6afbfbf87efbcc3561"></a>
### Function PropertyField

![][public]


```cpp
ansys::dpf::PropertyField::PropertyField(int id, Client const *const client)
```




Retrieve an existing instance of [PropertyField](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField) on a server.



**Parameters**:

* int **id**: [in] Id of the [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) object on the server's database.
* [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client**: [in] [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) instance designating the IP, port and protocol to use.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::PropertyField"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1ad787ee870fa5d12ba322bd1d3bbb52cd"></a>
### Function PropertyField

![][public]


```cpp
ansys::dpf::PropertyField::PropertyField(PropertyField const &)
```








**Parameters**:

* PropertyField const &

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::PropertyField"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1a89260e610bdbe97eaf9a0f6364daf0de"></a>
### Function PropertyField

![][public]


```cpp
ansys::dpf::PropertyField::PropertyField(PropertyField &&) noexcept
```








**Parameters**:

* PropertyField &&

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::PropertyField"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1adec6a0cbb0a46d7831e223fad50aab62"></a>
### Function operator=

![][public]


```cpp
PropertyField & ansys::dpf::PropertyField::operator=(PropertyField const &)
```








**Parameters**:

* PropertyField const &

**Return type**: PropertyField &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::operator="}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1a790b5c4569b3f2b6c58c0e9292147d12"></a>
### Function operator=

![][public]


```cpp
PropertyField & ansys::dpf::PropertyField::operator=(PropertyField &&) noexcept
```








**Parameters**:

* PropertyField &&

**Return type**: PropertyField &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::operator="}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1a4df2020806c5f8d2ace1faa6b26a1ecb"></a>
### Function fieldDefinition

![][public]
![][const]


```cpp
FieldDefinition ansys::dpf::PropertyField::fieldDefinition() const
```




**Returns**:

[FieldDefinition](classansys_1_1dpf_1_1FieldDefinition.md#classansys_1_1dpf_1_1FieldDefinition) of the field.



**Return type**: [FieldDefinition](classansys_1_1dpf_1_1FieldDefinition.md#classansys_1_1dpf_1_1FieldDefinition)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::fieldDefinition"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1a4ed774aecf5c68516a17da55da7b0ff7"></a>
### Function setFieldDefinition

![][public]


```cpp
void ansys::dpf::PropertyField::setFieldDefinition(FieldDefinition const &f)
```




Set the [FieldDefinition](classansys_1_1dpf_1_1FieldDefinition.md#classansys_1_1dpf_1_1FieldDefinition).



**Parameters**:

* [FieldDefinition](classansys_1_1dpf_1_1FieldDefinition.md#classansys_1_1dpf_1_1FieldDefinition) const & **f**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::setFieldDefinition"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1ac99d91c191df704b90601b43076c216a"></a>
### Function support

![][public]
![][const]


```cpp
Support ansys::dpf::PropertyField::support() const
```




**Returns**:

[Support](classansys_1_1dpf_1_1Support.md#classansys_1_1dpf_1_1Support) of the [PropertyField](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField).



**Return type**: Support

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::support"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1a8124e1eaed971c006045b89b5fb28798"></a>
### Function setSupport

![][public]


```cpp
void ansys::dpf::PropertyField::setSupport(ansys::dpf::Support const &s)
```




Set the support of the [PropertyField](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField).



**Parameters**:

* [ansys::dpf::Support](classansys_1_1dpf_1_1Support.md#classansys_1_1dpf_1_1Support) const & **s**: [in] [PropertyField](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField) to support.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::setSupport"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1ae715fc13eaca1ce40e0fcd686d3c8555"></a>
### Function setSupport

![][public]


```cpp
void ansys::dpf::PropertyField::setSupport(ansys::dpf::TimeFreqSupport const &s)
```




Set the support of the [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field).



**Parameters**:

* [ansys::dpf::TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport) const & **s**: [in] [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport) to support.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::setSupport"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1a8244b39576d028e8168557c0764d49a6"></a>
### Function setSupport

![][public]


```cpp
void ansys::dpf::PropertyField::setSupport(ansys::dpf::MeshedRegion const &s)
```




Set the support of the [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field).



**Parameters**:

* [ansys::dpf::MeshedRegion](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion) const & **s**: [in] [MeshedRegion](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion) to support.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::setSupport"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1aaf5a2e4abe9da5e77cc7b954b0ef81ba"></a>
### Function name

![][public]
![][const]


```cpp
std::string ansys::dpf::PropertyField::name() const
```




**Returns**:

Name of [PropertyField](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField).



**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::name"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1aefb5d03109bcc57f95ca1257ab92ed7b"></a>
### Function setName

![][public]


```cpp
void ansys::dpf::PropertyField::setName(const std::string &name)
```




Set name of [PropertyField](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField).



**Parameters**:

* const std::string & **name**: [in] New name.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::setName"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1a9dbf80f14848a93eb311d97a4b3da8dd"></a>
### Function location

![][public]
![][const]


```cpp
Location ansys::dpf::PropertyField::location() const
```




**Returns**:

[Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location) of the property.



**Return type**: [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::location"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1a9d57c8ecf193532958d34de87db60da0"></a>
### Function scoping

![][public]
![][const]


```cpp
Scoping ansys::dpf::PropertyField::scoping() const
```




**Returns**:

[Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping) of the property.



**Return type**: [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::scoping"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1af0ff358222e067e0c03d588a6b11b04c"></a>
### Function dataSize

![][public]
![][const]


```cpp
dp_int ansys::dpf::PropertyField::dataSize() const
```




**Returns**:

Size of the data container.



**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::dataSize"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1a1a2b01c58216827f720b4a76a8f52d9d"></a>
### Function numberOfComponents

![][public]
![][const]


```cpp
dp_int ansys::dpf::PropertyField::numberOfComponents() const
```




**Returns**:

Number of components in the property data.



**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::numberOfComponents"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1a3cb32ee79adc23f5c7ab5f6b6d831e26"></a>
### Function numberOfElementaryData

![][public]
![][const]


```cpp
dp_int ansys::dpf::PropertyField::numberOfElementaryData() const
```




**Returns**:

Number of elementary data (size = number of components) contained in the [PropertyField](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField).



**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::numberOfElementaryData"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1a74bc6460d3924f837b480b725f2d230c"></a>
### Function push\_back

![][public]


```cpp
void ansys::dpf::PropertyField::push_back(dp_id entity_id, std::vector< int > const &values)
```




Push back the entity data.



**Parameters**:

* [dp\_id](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ab4574c9af3f2bb8011da7d1f4c8da20e) **entity_id**: [in] Id of entity for which to push data.
* std::vector< int > const & **values**: [in] Vector of data for entity.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::push_back"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1ac709022d579f02b554fdc06fe0a59f7f"></a>
### Function push\_back

![][public]


```cpp
void ansys::dpf::PropertyField::push_back(dp_id entity_id, const int *values, int size)
```




Push back the entity data.



**Parameters**:

* [dp\_id](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ab4574c9af3f2bb8011da7d1f4c8da20e) **entity_id**: [in] Index of entity for which to push data.
* const int * **values**: [in] Ptr on data for entity.
* int **size**: [in] Number of entities.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::push_back"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1a2200849fcd3d0c6ebc171b15d9cb8e54"></a>
### Function push\_back

![][public]


```cpp
void ansys::dpf::PropertyField::push_back(dp_id entity_id, int *values, int size)
```




Push back the entity data.



**Parameters**:

* [dp\_id](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ab4574c9af3f2bb8011da7d1f4c8da20e) **entity_id**: [in] Index of entity for which to push data.
* int * **values**: [in] Ptr on data for entity.
* int **size**: [in] Number of entities.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::push_back"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1ae40e20aaa78a8bfc6ff8176cb9381152"></a>
### Function setData

![][public]


```cpp
void ansys::dpf::PropertyField::setData(std::vector< int > const &data)
```




Set the data of the property field.



**Parameters**:

* std::vector< int > const & **data**: [in] Vector of data.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::setData"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1a74e8c4842a23651d988f8a264c9eabe6"></a>
### Function setData

![][public]


```cpp
void ansys::dpf::PropertyField::setData(int const *const data, int size)
```




Set the data of the property field.



**Parameters**:

* int const *const **data**: [in] List of data.
* int **size**: [in] Size of list.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::setData"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1afb3f6cd0c63ea162c4a7a53ef8066e7f"></a>
### Function setDataPointer

![][public]


```cpp
void ansys::dpf::PropertyField::setDataPointer(std::vector< int > const &data)
```




Set the data pointer of the property field.



**Parameters**:

* std::vector< int > const & **data**: [in] Vector of data.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::setDataPointer"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1a4e7b773455c0cf6aefdfaa5e25261940"></a>
### Function setDataPointer

![][public]


```cpp
void ansys::dpf::PropertyField::setDataPointer(int *const data, int size)
```




Set the data pointer of the property field.



**Parameters**:

* int *const **data**: [in] List of data.
* int **size**: [in] Size of list.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::setDataPointer"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1a6e63d1d672b5b1d074052e9e9f0ad239"></a>
### Function setScoping

![][public]


```cpp
void ansys::dpf::PropertyField::setScoping(ansys::dpf::Scoping const &s)
```




Set the scoping of the property field.



**Parameters**:

* [ansys::dpf::Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping) const & **s**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::setScoping"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1a8b09b1109c854475c4af16cba105a667"></a>
### Function dataByIndex

![][public]
![][const]


```cpp
const dp_int * ansys::dpf::PropertyField::dataByIndex(dp_index entity_index, int &size) const
```




**Returns**:

Pointer to entity data given by index.



**Parameters**:

* [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) **entity_index**: [in] Index of entity for which to get data.
* int & **size**: [out] Size of return data.

**Return type**: const [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::dataByIndex"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1aa32b0e1c2611e88a2aef55c94a8c6880"></a>
### Function dataById

![][public]
![][const]


```cpp
const dp_int * ansys::dpf::PropertyField::dataById(dp_id entity_id, int &size) const
```




**Returns**:

Pointer to entity data given by id.



**Parameters**:

* [dp\_id](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ab4574c9af3f2bb8011da7d1f4c8da20e) **entity_id**: [in] Id of entity for which to get data.
* int & **size**: [out] Size of return data.

**Return type**: const [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::dataById"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1a90f3baa944b4dd1a49adbcbec5a3d766"></a>
### Function fillCursor

![][public]
![][const]


```cpp
void ansys::dpf::PropertyField::fillCursor(dp_index index, PropFieldCursor &cursor) const
```




Get data at a given index.



**Parameters**:

* [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) **index**: [in] Index of entity for which to get data.
* [PropFieldCursor](classansys_1_1dpf_1_1PropFieldCursor.md#classansys_1_1dpf_1_1PropFieldCursor) & **cursor**: [out] [PropFieldCursor](classansys_1_1dpf_1_1PropFieldCursor.md#classansys_1_1dpf_1_1PropFieldCursor) with which to contain data.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::fillCursor"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1a55c6d4eb97b98ca58672b149e2bf1483"></a>
### Function getIds

![][public]
![][const]


```cpp
void ansys::dpf::PropertyField::getIds(std::vector< dp_id > &ids_to_fill) const
```




Get ids of property entities.



**Parameters**:

* std::vector< [dp\_id](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ab4574c9af3f2bb8011da7d1f4c8da20e) > & **ids_to_fill**: [out] Entity ids.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::getIds"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1ab4fd6ed2f236efb404d4454944b4474b"></a>
### Function getData

![][public]
![][const]


```cpp
void ansys::dpf::PropertyField::getData(std::vector< dp_int > &values_to_fill) const
```




Get all data for property entities.



**Parameters**:

* std::vector< [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) > & **values_to_fill**: [out] Property entity data.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::getData"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1ac77c2c8994da1d1511c69849257c748c"></a>
### Function data

![][public]
![][const]


```cpp
DpfVector< int > ansys::dpf::PropertyField::data() const
```




**Returns**:

[DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) of data array.



**Return type**: DpfVector< int >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::data"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1a7b2afaba19a4b177460572a231c5275b"></a>
### Function dataPointer

![][public]
![][const]


```cpp
DpfVector< int > ansys::dpf::PropertyField::dataPointer() const
```




**Returns**:

[DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) of data array.



**Return type**: DpfVector< int >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::dataPointer"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1a78f843b67d4df51c5bd0c57f98d9cc17"></a>
### Function entityData

![][public]
![][const]


```cpp
void ansys::dpf::PropertyField::entityData(dp_index entity_index, DpfVector< int > &data) const
```




**Returns**:

[DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) of data array of an entity, by index.



**Parameters**:

* [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) **entity_index**: [in] Index of entity for which to get data.
* DpfVector< int > & **data**: [out] Pointer to the data.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::entityData"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1a433fe762b8bbf44c5cb7bc09e8e4f7a7"></a>
### Function entityDataById

![][public]
![][const]


```cpp
void ansys::dpf::PropertyField::entityDataById(dp_id entity_id, DpfVector< int > &data) const
```




**Returns**:

[DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) of data array of an entity, by id.



**Parameters**:

* [dp\_id](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ab4574c9af3f2bb8011da7d1f4c8da20e) **entity_id**: [in] Id of entity for which to get data.
* DpfVector< int > & **data**: [out] Pointer to the data.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::entityDataById"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1ad7e142a83fd4138694a80f1a36bb778a"></a>
### Function reserve

![][public]


```cpp
void ansys::dpf::PropertyField::reserve(dp_int number_of_entities, dp_int overall_size=0)
```




Reserve the [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field). Only implemented for in process udage. To reserve the size for gRPC usage, use the constructor.



**Parameters**:

* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **number_of_entities**: [in] Number of entities.
* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **overall_size** = 0 : [in] Total size of entity data.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::reserve"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1aafa75bc6e0e191b4914282ad620a5c35"></a>
### Function resize

![][public]


```cpp
void ansys::dpf::PropertyField::resize(dp_int number_of_entities, dp_int overall_size)
```




Reserve the [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field).



**Parameters**:

* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **number_of_entities**: [in] Number of entities.
* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **overall_size**: [in] Total size of entity data.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::resize"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1ab1245b64a580a13f74be20bc993eb403"></a>
### Function deep\_copy

![][public]
![][const]


```cpp
PropertyField ansys::dpf::PropertyField::deep_copy(ansys::dpf::Client const *const client=nullptr) const
```




Make a deep copy on a given client.



**Parameters**:

* [ansys::dpf::Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client** = nullptr : [in] Remote client

**Return type**: PropertyField

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::deep_copy"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1a695daa98db9128948db4c67ffc57eedd"></a>
### Function cloneToCustomTypeField

![][public]
![][const]


```cpp
CustomTypeField ansys::dpf::PropertyField::cloneToCustomTypeField(ansys::dpf::Client const *const client=nullptr, bool const copy_ids=true, bool const copy_data_ptr=true, bool const copy_support=true) const
```




Creates a new custom type field object from current property field without its data.



**Parameters**:

* [ansys::dpf::Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client** = nullptr : [in] Remote client
* bool const **copy_ids** = true : [in] Boolean to decide if scoping ids are to be copied
* bool const **copy_data_ptr** = true : [in] Boolean to decide if data pointer is to be copied
* bool const **copy_support** = true : [in] Boolean to decide if the support reference is to be copied

**Return type**: [CustomTypeField](classansys_1_1dpf_1_1CustomTypeField.md#classansys_1_1dpf_1_1CustomTypeField)

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"typename UnitaryDataType"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::cloneToCustomTypeField"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1ace579cbad593a985d56dfae75f3a50ba"></a>
### Function cloneToField

![][public]
![][const]


```cpp
Field ansys::dpf::PropertyField::cloneToField(ansys::dpf::Client const *const client=nullptr, bool const copy_ids=true, bool const copy_data_ptr=true, bool const copy_support=true) const
```




Creates a new field object from current property field without its data.



**Parameters**:

* [ansys::dpf::Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client** = nullptr : [in] Remote client
* bool const **copy_ids** = true : [in] Boolean to decide if scoping ids are to be copied
* bool const **copy_data_ptr** = true : [in] Boolean to decide if data pointer is to be copied
* bool const **copy_support** = true : [in] Boolean to decide if the support reference is to be copied

**Return type**: [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::cloneToField"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1a940bc0ea91ca4e1725abb112eee4c0e4"></a>
### Function cloneToPropertyField

![][public]
![][const]


```cpp
PropertyField ansys::dpf::PropertyField::cloneToPropertyField(ansys::dpf::Client const *const client=nullptr, bool const copy_ids=true, bool const copy_data_ptr=true, bool const copy_support=true) const
```




Creates a new property field object from current property field without its data.



**Parameters**:

* [ansys::dpf::Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client** = nullptr : [in] Remote client
* bool const **copy_ids** = true : [in] Boolean to decide if scoping ids are to be copied
* bool const **copy_data_ptr** = true : [in] Boolean to decide if data pointer is to be copied
* bool const **copy_support** = true : [in] Boolean to decide if the support reference is to be copied

**Return type**: PropertyField

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::cloneToPropertyField"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1aa9dc8cbf0e0bb1fd4efb704737ad2065"></a>
### Function getHeaderAsDataTree

![][public]
![][const]


```cpp
DataTree ansys::dpf::PropertyField::getHeaderAsDataTree() const
```




Get the header of the [PropertyField](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField) as a [DataTree](classansys_1_1dpf_1_1DataTree.md#classansys_1_1dpf_1_1DataTree) object.



**Return type**: DataTree

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::getHeaderAsDataTree"}]}`
-->

<a id="classansys_1_1dpf_1_1PropertyField_1a9c5f2a9ad893a89b067fc93c72170d56"></a>
### Function setHeaderAsDataTree

![][public]


```cpp
void ansys::dpf::PropertyField::setHeaderAsDataTree(const DataTree &datatree)
```




Set the header of the [PropertyField](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField) using a [DataTree](classansys_1_1dpf_1_1DataTree.md#classansys_1_1dpf_1_1DataTree) object.



**Parameters**:

* const DataTree & **datatree**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyField::setHeaderAsDataTree"}]}`
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