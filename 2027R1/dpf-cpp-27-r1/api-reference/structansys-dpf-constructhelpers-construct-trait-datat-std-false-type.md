<a id="structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01DataT_00_01std_1_1false__type_01_4"></a>
# Structure ansys::dpf::ConstructHelpers::construct\_trait\< DataT, std::false\_type \>

![][C++]
![][public]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 6993)

specialized for all entities not deriving from [CustomContainerBase](classansys_1_1dpf_1_1CustomContainerBase.md#classansys_1_1dpf_1_1CustomContainerBase).

**Template parameters**:

* typename DataT

## Members

* [createAny](structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01DataT_00_01std_1_1false__type_01_4.md#structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01DataT_00_01std_1_1false__type_01_4_1a883546799a9ae38062cf12f1c9df946d)
* [getFromAny](structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01DataT_00_01std_1_1false__type_01_4.md#structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01DataT_00_01std_1_1false__type_01_4_1a9cc7d7c65cb2f41c7c826dbb01ee2d05)
* [getOperatorInput](structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01DataT_00_01std_1_1false__type_01_4.md#structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01DataT_00_01std_1_1false__type_01_4_1a9eb79b0b5db85ead9ec358aa878c4203)
* [getOutputFromOperator](structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01DataT_00_01std_1_1false__type_01_4.md#structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01DataT_00_01std_1_1false__type_01_4_1a506ad6d1994cc22b40c83ee9b77fdebc)
* [getOutputFromWorkflow](structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01DataT_00_01std_1_1false__type_01_4.md#structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01DataT_00_01std_1_1false__type_01_4_1aeb56b19f98e5ebeb8297a71ac863fc60)

## Public static functions

<a id="structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01DataT_00_01std_1_1false__type_01_4_1a9cc7d7c65cb2f41c7c826dbb01ee2d05"></a>
### Function getFromAny

![][public]
![][static]

```cpp
static DataT ansys::dpf::ConstructHelpers::construct_trait< DataT, std::false_type >::getFromAny(Any const &any)
```

**Parameters**:

* [Any](classansys_1_1dpf_1_1Any.md#classansys_1_1dpf_1_1Any) const & **any**

**Return type**: DataT

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ConstructHelpers::construct_trait< DataT, std::false_type >::getFromAny"}]}`
-->

<a id="structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01DataT_00_01std_1_1false__type_01_4_1a883546799a9ae38062cf12f1c9df946d"></a>
### Function createAny

![][public]
![][static]

```cpp
static void ansys::dpf::ConstructHelpers::construct_trait< DataT, std::false_type >::createAny(Any &any, DataT const &obj, Client const *const client)
```

**Parameters**:

* [Any](classansys_1_1dpf_1_1Any.md#classansys_1_1dpf_1_1Any) & **any**
* DataT const & **obj**
* [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ConstructHelpers::construct_trait< DataT, std::false_type >::createAny"}]}`
-->

<a id="structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01DataT_00_01std_1_1false__type_01_4_1a506ad6d1994cc22b40c83ee9b77fdebc"></a>
### Function getOutputFromOperator

![][public]
![][static]

```cpp
static DataT ansys::dpf::ConstructHelpers::construct_trait< DataT, std::false_type >::getOutputFromOperator(Operator &op, dp_index pin_index)
```

**Parameters**:

* [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) & **op**
* [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) **pin_index**

**Return type**: DataT

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ConstructHelpers::construct_trait< DataT, std::false_type >::getOutputFromOperator"}]}`
-->

<a id="structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01DataT_00_01std_1_1false__type_01_4_1aeb56b19f98e5ebeb8297a71ac863fc60"></a>
### Function getOutputFromWorkflow

![][public]
![][static]

```cpp
static DataT ansys::dpf::ConstructHelpers::construct_trait< DataT, std::false_type >::getOutputFromWorkflow(Workflow &wf, std::string const &pin_index)
```

**Parameters**:

* Workflow & **wf**
* std::string const & **pin_index**

**Return type**: DataT

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ConstructHelpers::construct_trait< DataT, std::false_type >::getOutputFromWorkflow"}]}`
-->

<a id="structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01DataT_00_01std_1_1false__type_01_4_1a9eb79b0b5db85ead9ec358aa878c4203"></a>
### Function getOperatorInput

![][public]
![][static]

```cpp
static DataT ansys::dpf::ConstructHelpers::construct_trait< DataT, std::false_type >::getOperatorInput(OperatorMain &op, dp_index pin_index)
```

**Parameters**:

* OperatorMain & **op**
* [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) **pin_index**

**Return type**: DataT

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ConstructHelpers::construct_trait< DataT, std::false_type >::getOperatorInput"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)